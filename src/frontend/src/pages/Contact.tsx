import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactInquiry } from "@/hooks/useQueries";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const submitInquiry = useSubmitContactInquiry();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await submitInquiry.mutateAsync(form);
      toast.success("Inquiry submitted! We'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setSubmitted(true);
    } catch {
      toast.error("Failed to submit. Please try again.");
    }
  }

  return (
    <div data-ocid="contact.page">
      {/* Hero */}
      <section className="bg-card border-b border-border py-16">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <Badge
            variant="outline"
            className="mb-4 border-accent/40 text-accent"
          >
            Contact Us
          </Badge>
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg">
            Have questions about our services? We're here to help with all your
            tax filing needs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card
                className="border border-border"
                data-ocid="contact.info_card"
              >
                <CardHeader>
                  <CardTitle className="font-display text-lg">
                    VKD Tax Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm mb-0.5">
                        Office Address
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        House No. 15, Vijay Nagar,
                        <br />
                        Near Shriram Agency,
                        <br />
                        Nanded - 431602,
                        <br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm mb-0.5">
                        Phone &amp; Inquiry
                      </p>
                      <a
                        href="tel:+919850939988"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                        data-ocid="contact.phone_link"
                      >
                        +91 98509 39988
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="border border-[#25D366]/25 bg-[#25D366]/5">
                <CardContent className="pt-5 pb-5">
                  <p className="font-semibold text-foreground mb-1 text-sm">
                    Quick Inquiry via WhatsApp
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Chat directly with us for faster responses. We typically
                    reply within a few hours.
                  </p>
                  <a
                    href="https://wa.me/919850939988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20b856] transition-smooth"
                    data-ocid="contact.whatsapp_button"
                  >
                    <SiWhatsapp className="w-4 h-4" />
                    Message on WhatsApp
                  </a>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="border border-border">
                <CardContent className="pt-5 pb-5 space-y-2">
                  <p className="font-semibold text-foreground text-sm">
                    Business Hours
                  </p>
                  <div className="space-y-1.5">
                    {[
                      { day: "Monday – Friday", hours: "10:00 AM – 7:00 PM" },
                      { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map(({ day, hours }) => (
                      <div
                        key={day}
                        className="flex justify-between text-sm text-muted-foreground"
                      >
                        <span>{day}</span>
                        <span className="text-foreground font-medium">
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card
              className="border border-border shadow-subtle"
              data-ocid="contact.form_card"
            >
              <CardHeader>
                <CardTitle className="font-display text-lg">
                  Send an Inquiry
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div
                    className="flex flex-col items-center text-center py-10 gap-4"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-lg mb-1">
                        Inquiry Sent!
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-xs">
                        Thank you for reaching out. Our team will get back to
                        you within 1 business day.
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      data-ocid="contact.send_another_button"
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Rajesh Kumar"
                          required
                          data-ocid="contact.name_input"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="rajesh@example.com"
                          required
                          data-ocid="contact.email_input"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Income Tax Return Filing Inquiry"
                        required
                        data-ocid="contact.subject_input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your requirement or question..."
                        rows={4}
                        required
                        data-ocid="contact.message_textarea"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={submitInquiry.isPending}
                      data-ocid="contact.submit_button"
                    >
                      {submitInquiry.isPending ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        "Send Inquiry"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
