import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid WhatsApp/phone number")
    .max(20)
    .regex(/^\+?[0-9\s-]{7,20}$/, "Use digits only, optionally starting with +"),
  country: z.string().trim().min(2, "Please enter your country").max(60),
  occupation: z.string().trim().min(2, "Please enter your occupation").max(80),
  attendance: z.enum(["online", "physical"], { message: "Choose an attendance option" }),
  consent: z.literal(true, { message: "Please accept to receive workshop communications" }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema> | "form", string>>;

const emptyForm = {
  full_name: "",
  email: "",
  phone: "",
  country: "",
  occupation: "",
  attendance: "",
  consent: false,
};

export function RegistrationForm() {
  const [values, setValues] = useState<typeof emptyForm>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const set = (key: keyof typeof emptyForm, value: string | boolean) =>
    setValues((v) => ({ ...v, [key]: value }));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("loading");
    const { error } = await supabase.from("weyone_registrations").insert(parsed.data);
    if (error) {
      setStatus("idle");
      setErrors({ form: "We couldn't submit your registration. Please try again." });
      return;
    }
    setStatus("success");
    setValues(emptyForm);
  }

  if (status === "success") {
    return (
      <div className="animate-pop rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
        <span className="mx-auto grid size-14 place-items-center rounded-full gradient-brand text-primary-foreground">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-bold">You&apos;re registered for Weyone!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your place is reserved for the next weekly AI workshop. Joining details will be sent to
          your email address.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Register another person
        </Button>
      </div>
    );
  }

  const field = (key: keyof typeof emptyForm) =>
    errors[key as keyof Errors] ? "border-destructive" : "";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="full_name">Full Name</Label>
          <Input
            id="full_name"
            className={`mt-2 h-11 ${field("full_name")}`}
            value={values.full_name}
            onChange={(e) => set("full_name", e.target.value)}
            autoComplete="name"
          />
          <FieldError message={errors.full_name} />
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            className={`mt-2 h-11 ${field("email")}`}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            autoComplete="email"
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <Label htmlFor="phone">WhatsApp / Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            className={`mt-2 h-11 ${field("phone")}`}
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            autoComplete="tel"
            placeholder="+232..."
          />
          <FieldError message={errors.phone} />
        </div>

        <div>
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            className={`mt-2 h-11 ${field("country")}`}
            value={values.country}
            onChange={(e) => set("country", e.target.value)}
            autoComplete="country-name"
          />
          <FieldError message={errors.country} />
        </div>

        <div>
          <Label htmlFor="occupation">Occupation</Label>
          <Input
            id="occupation"
            className={`mt-2 h-11 ${field("occupation")}`}
            value={values.occupation}
            onChange={(e) => set("occupation", e.target.value)}
          />
          <FieldError message={errors.occupation} />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium">Preferred Attendance</legend>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            {(["online", "physical"] as const).map((option) => (
              <label
                key={option}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium capitalize transition-colors ${
                  values.attendance === option
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border hover:bg-secondary"
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value={option}
                  checked={values.attendance === option}
                  onChange={() => set("attendance", option)}
                  className="size-4 accent-[var(--primary)]"
                />
                {option === "online" ? "Online (Zoom)" : "Physical (Mount Auorel FBC Campus)"}
              </label>
            ))}
          </div>
          <FieldError message={errors.attendance} />
        </fieldset>

        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={values.consent}
              onChange={(e) => set("consent", e.target.checked)}
              className="mt-0.5 size-4 accent-[var(--primary)]"
            />
            I agree to receive workshop-related communications about Weyone by email and WhatsApp.
          </label>
          <FieldError message={errors.consent} />
        </div>
      </div>

      {errors.form && (
        <p className="mt-4 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {errors.form}
        </p>
      )}

      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="mt-6 w-full"
        disabled={status === "loading"}
      >
        {status === "loading" && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        Register Free
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Free registration. Free workshop attendance.
      </p>
    </form>
  );
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-destructive">{message}</p>;
}