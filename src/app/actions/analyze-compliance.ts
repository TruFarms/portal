
'use server';
import { complianceAnalysis, type ComplianceAnalysisInput, type ComplianceAnalysisOutput } from '@/ai/flows/compliance-analysis';
import { z } from 'zod';

const schema = z.object({
  content: z.string().min(1, { message: 'Content for analysis cannot be empty.' })
           .max(5000, {message: 'Content exceeds maximum length of 5000 characters.'}),
});

export interface ComplianceFormState {
  message: string;
  report?: string;
  isError?: boolean;
  fieldErrors?: {
    content?: string[];
  };
  timestamp?: number; // To force re-render on new submissions
}

export async function analyzeComplianceAction(
  prevState: ComplianceFormState, 
  formData: FormData
): Promise<ComplianceFormState> {
  const validatedFields = schema.safeParse({
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      isError: true,
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      timestamp: Date.now(),
    };
  }

  try {
    const input: ComplianceAnalysisInput = { content: validatedFields.data.content };
    const result: ComplianceAnalysisOutput = await complianceAnalysis(input);
    return {
      message: 'Compliance analysis complete.',
      report: result.report,
      isError: false,
      timestamp: Date.now(),
    };
  } catch (e) {
    console.error('Compliance Analysis Error:', e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return {
      message: `An error occurred during analysis: ${errorMessage}`,
      isError: true,
      timestamp: Date.now(),
    };
  }
}
