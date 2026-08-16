CREATE TABLE public.weyone_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text NOT NULL,
  occupation text NOT NULL,
  attendance text NOT NULL CHECK (attendance IN ('online','physical')),
  consent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.weyone_registrations TO anon, authenticated;
GRANT ALL ON public.weyone_registrations TO service_role;

ALTER TABLE public.weyone_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a registration"
  ON public.weyone_registrations FOR INSERT TO anon, authenticated
  WITH CHECK (true);