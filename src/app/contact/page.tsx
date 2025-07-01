"use client";

import React, { useEffect, useRef } from 'react';
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

interface ContactFormState {
  success: boolean | null;
  message: string;
  fieldErrors?: { name?: string; email?: string; message?: string };
  timestamp?: number;
}

async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const name = formData.get('name') as string | null;
  const email = formData.get('email') as string | null;
  const message = formData.get('message') as string | null;

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
  
  console.log({ name, email, message });
  return { 
    success: true, 
    message: "Thank you for your message! We'll be in touch soon.",
    timestamp: Date.now()
  };
}

function SubmitContactButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
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
  const prevTimestampRef = useRef(state.timestamp);

  useEffect(() => {
    if (state.timestamp !== prevTimestampRef.current && state.timestamp !== 0 && state.message) {
      toast({
        title: state.success ? 'Message Sent!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
    prevTimestampRef.current = state.timestamp;
  }, [state.message, state.success, state.fieldErrors, state.timestamp, toast]);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20">
        <section id="contact" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-headline">Get in Touch</h2>
              <p className="text-lg text-foreground max-w-2xl mx-auto">
                Have questions or ready to discuss your B2B manufacturing needs? Contact us today.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline">Send Us a Message</CardTitle>
                  <CardDescription>We typically respond within 24-48 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={formAction} className="space-y-6">
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
                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" name="company" type="text" placeholder="Your Company Name" />
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
              </Card>

              <div className="space-y-8">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-headline flex items-center"><MapPin className="h-6 w-6 mr-3 text-primary"/> Our Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">TruFarms Headquarters</p>
                    <p className="text-muted-foreground">123 Lab Drive<br />Rochester, MN 55901<br />United States</p>
                    <Button variant="outline" className="mt-4" asChild>
                      <a href="https://maps.google.com/?q=Rochester,MN" target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-headline flex items-center"><Mail className="h-6 w-6 mr-3 text-primary"/> Email Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">For general inquiries:</p>
                    <a href="mailto:info@trufarms.com" className="text-primary hover:underline">info@trufarms.com</a>
                    <p className="text-foreground mt-2">For sales and partnerships:</p>
                    <a href="mailto:sales@trufarms.com" className="text-primary hover:underline">sales@trufarms.com</a>
                  </CardContent>
                </Card>
                <Card className="shadow-xl">
                   <CardHeader>
                    <CardTitle className="text-xl font-headline flex items-center"><Phone className="h-6 w-6 mr-3 text-primary"/> Call Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">Main Office Line:</p>
                    <a href="tel:+15075551234" className="text-primary hover:underline">(507) 555-1234</a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
