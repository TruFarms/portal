
"use client";

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { analyzeComplianceAction, type ComplianceFormState } from '@/app/actions/analyze-compliance';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Analyze Content
    </Button>
  );
}

export default function ComplianceToolSection() {
  const initialState: ComplianceFormState = { message: '', timestamp: Date.now() };
  const [state, formAction] = useActionState(analyzeComplianceAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.timestamp !== initialState.timestamp) { // only show toast for new messages
      toast({
        title: state.isError ? 'Analysis Error' : 'Analysis Status',
        description: state.message,
        variant: state.isError ? 'destructive' : 'default',
      });
    }
  }, [state, toast, initialState.timestamp]);


  return (
    <section id="compliance-tool" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-headline">Compliance Analysis Tool</h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Vet your marketing content against Minnesota cannabis regulations. Enter your text below to receive an AI-powered compliance analysis.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Analyze Your Content</CardTitle>
            <CardDescription>
              Paste your marketing copy, product descriptions, or any other communication material.
            </CardDescription>
          </CardHeader>
          <form action={formAction}>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="compliance-content" className="sr-only">Content to Analyze</Label>
                <Textarea
                  id="compliance-content"
                  name="content"
                  placeholder="Enter content here for compliance analysis (max 5000 characters)..."
                  rows={8}
                  aria-describedby="content-error"
                  className="text-sm"
                />
                {state.fieldErrors?.content && (
                  <p id="content-error" className="text-sm text-destructive mt-1">
                    {state.fieldErrors.content.join(', ')}
                  </p>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>

        {state.timestamp !== initialState.timestamp && state.report && !state.isError && (
          <Card className="max-w-3xl mx-auto mt-8 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline">
                <CheckCircle className="h-6 w-6 mr-2 text-green-600" /> Analysis Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert variant="default" className="bg-green-50 border-green-200">
                <AlertTitle className="font-semibold text-green-700">Report Generated</AlertTitle>
                <AlertDescription className="text-green-600 whitespace-pre-wrap">{state.report}</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}
         {state.timestamp !== initialState.timestamp && state.isError && state.message && !state.fieldErrors && (
          <Card className="max-w-3xl mx-auto mt-8 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline">
                <AlertTriangle className="h-6 w-6 mr-2 text-destructive" /> Analysis Error
              </CardTitle>
            </CardHeader>
            <CardContent>
               <Alert variant="destructive">
                <AlertTitle className="font-semibold">Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}
         <div className="max-w-3xl mx-auto mt-8">
            <Alert variant="default" className="border-blue-200 bg-blue-50 text-blue-700">
                <Info className="h-5 w-5 text-blue-700" />
                <AlertTitle className="font-semibold">Disclaimer</AlertTitle>
                <AlertDescription>
                    This tool provides AI-generated suggestions and is not a substitute for legal advice. Always consult with a qualified legal professional for definitive compliance guidance.
                </AlertDescription>
            </Alert>
         </div>

      </div>
    </section>
  );
}
