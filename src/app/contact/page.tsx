"use client";

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContactFormState {
  success: boolean | null;
  message: string;
  fieldErrors?: { name?: string; email?: string; message?: string };
  timestamp?: number;
}

async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const name = formData.get('name') as string | null;
  const email = formData.get('email') as string | null;
  const message = formData.get('message') as string | null;
  const company = formData.get('company') as string | null;
  const phone = formData.get('phone') as string | null;
  const referral = formData.get('referral') as string | null;

  const errors: { name?: string; email?: string; message?: string } = {};
  if (!name) errors.name = 'Name is required.';
  if (!email) errors.email = 'Email is required.';
  else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid.';
  if (!message) errors.message = 'Message is required.';

  if (Object.keys(errors).length > 0) {
    return { 
      success: false, 
      message: "Please fill all required fields correctly.", 
      fieldErrors: errors,
      timestamp: Date.now() 
    };
  }

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, company, phone, referral }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message.');
    }

    return { 
      success: true, 
      message: "Thank you for your message! We'll be in touch soon.",
      timestamp: Date.now()
    };
  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
      timestamp: Date.now(),
    };
  }
}

function SubmitContactButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto" variant="accent" size="lg">
      {pending ? <Send className="mr-2 h-4 w-4 animate-pulse" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

const initialStableContactFormState: ContactFormState = { 
  success: null, 
  message: '', 
  fieldErrors: undefined, 
  timestamp: 0 
};


export default function ContactPage() {
  const [state, formAction] = React.useActionState(submitContactForm, initialStableContactFormState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const selectTriggerRef = useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (state.timestamp && state.message) {
      toast({
        title: state.success ? 'Message Sent!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
        if (selectTriggerRef.current) {
           const trigger = selectTriggerRef.current;
           const valueNode = trigger.childNodes[0];
           if (valueNode && valueNode.childNodes[0]) {
               (valueNode.childNodes[0] as HTMLElement).innerText = 'Select an option';
           }
        }
      }
    }
  }, [state, toast]);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20">
        <section id="contact" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 font-headline">Get in Touch</h2>
              <p className="text-lg text-foreground max-w-2xl mx-auto">
                Have questions or ready to discuss your B2B manufacturing needs? Contact us today.
              </p>
            </div>

            <Card className="overflow-hidden shadow-2xl lg:grid lg:grid-cols-3">
              <div className="p-8 lg:p-12 lg:col-span-2">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl font-headline text-primary">Send Us a Message</CardTitle>
                  <CardDescription>We typically respond within 24-48 hours.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <form ref={formRef} action={formAction} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" type="text" placeholder="Your Name" required className={state.fieldErrors?.name ? 'border-destructive' : ''} />
                        {state.fieldErrors?.name && <p className="text-sm text-destructive mt-1">{state.fieldErrors.name}</p>}
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="your@email.com" required className={state.fieldErrors?.email ? 'border-destructive' : ''} />
                        {state.fieldErrors?.email && <p className="text-sm text-destructive mt-1">{state.fieldErrors.email}</p>}
                      </div>
                    </div>
                     <div className="grid sm:grid-cols-2 gap-6">
                       <div>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
                      </div>
                      <div>
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input id="company" name="company" type="text" placeholder="Your Company Name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="referral">How did you hear about us? (Optional)</Label>
                        <Select name="referral">
                         <SelectTrigger ref={selectTriggerRef} id="referral">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Search Engine (Google, etc.)">Search Engine (Google, etc.)</SelectItem>
                            <SelectItem value="Social Media">Social Media</SelectItem>
                            <SelectItem value="Referral">Referral</SelectItem>
                            <SelectItem value="Advertisement">Advertisement</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className={state.fieldErrors?.message ? 'border-destructive' : ''} />
                      {state.fieldErrors?.message && <p className="text-sm text-destructive mt-1">{state.fieldErrors.message}</p>}
                    </div>
                    <div>
                      <SubmitContactButton />
                    </div>
                  </form>
                </CardContent>
              </div>

              <div className="bg-secondary p-8 lg:p-12">
                  <h3 className="text-2xl font-bold font-headline text-primary mb-8">Contact Information</h3>
                  <div className="space-y-8">
                      <div className="flex items-start">
                          <MapPin className="h-8 w-8 text-primary mr-4 shrink-0 mt-1" />
                          <div>
                              <h4 className="text-lg font-semibold text-foreground">Our Location</h4>
                              <p className="text-muted-foreground">
                                  TruFarms Headquarters<br />
                                  Rochester, MN, United States
                              </p>
                              <Button variant="link" className="p-0 h-auto mt-2" asChild>
                                <a href="https://maps.google.com/?q=Rochester,MN" target="_blank" rel="noopener noreferrer">Get Directions</a>
                              </Button>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <Mail className="h-8 w-8 text-primary mr-4 shrink-0 mt-1" />
                          <div>
                              <h4 className="text-lg font-semibold text-foreground">Email Us</h4>
                              <p className="text-muted-foreground">General Inquiries:</p>
                              <a href="mailto:customerservice@trufarms.net" className="text-primary hover:underline break-all">customerservice@trufarms.net</a>
                              <p className="text-muted-foreground mt-2">Partnerships:</p>
                              <a href="mailto:alliance@trufarms.net" className="text-primary hover:underline break-all">alliance@trufarms.net</a>
                          </div>
                      </div>
                      <div className="flex items-start">
                          <Phone className="h-8 w-8 text-primary mr-4 shrink-0 mt-1" />
                          <div>
                              <h4 className="text-lg font-semibold text-foreground">Call Us</h4>
                              <p className="text-muted-foreground">Main Office Line:</p>
                              <a href="tel:+19194231506" className="text-primary hover:underline">(919) 423-1506</a>
                          </div>
                      </div>
                  </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
