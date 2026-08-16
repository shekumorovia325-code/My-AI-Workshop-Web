export const SITE = {
  name: "Weyone",
  instructor: "Sheku Morovia",
  website: "https://www.morovex.com",
  whatsappNumber: "+23280969174",
  whatsappLink:
    "https://wa.me/23280969174?text=" +
    encodeURIComponent("Hello Sheku, I would like to learn more about the Weyone AI workshop."),
  email: "Shekumorovia325@gmail.com",
  location: "Mount Auorel FBC Campus",
  platform: "Zoom",
  hours: "5:00 PM – 7:00 PM",
};

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What You'll Learn", href: "#learn" },
  { label: "Schedule", href: "#schedule" },
  { label: "Instructor", href: "#instructor" },
  { label: "FAQ", href: "#faq" },
  { label: "Register", href: "#register" },
];

export function scrollToRegister() {
  document.getElementById("register")?.scrollIntoView({ behavior: "smooth", block: "start" });
}