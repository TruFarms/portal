// src/ai/flows/compliance-analysis.ts
'use server';
/**
 * @fileOverview A compliance analysis AI agent.
 *
 * - complianceAnalysis - A function that handles the compliance analysis process.
 * - ComplianceAnalysisInput - The input type for the complianceAnalysis function.
 * - ComplianceAnalysisOutput - The return type for the complianceAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ComplianceAnalysisInputSchema = z.object({
  content: z.string().describe('The content to be analyzed for compliance.'),
});
export type ComplianceAnalysisInput = z.infer<typeof ComplianceAnalysisInputSchema>;

const ComplianceAnalysisOutputSchema = z.object({
  report: z.string().describe('A report highlighting any potentially non-compliant wording, visuals, or claims.'),
});
export type ComplianceAnalysisOutput = z.infer<typeof ComplianceAnalysisOutputSchema>;

export async function complianceAnalysis(input: ComplianceAnalysisInput): Promise<ComplianceAnalysisOutput> {
  return complianceAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'complianceAnalysisPrompt',
  input: {schema: ComplianceAnalysisInputSchema},
  output: {schema: ComplianceAnalysisOutputSchema},
  prompt: `You are a compliance expert specializing in Minnesota cannabis regulations. Analyze the following content and generate a report highlighting any potentially non-compliant wording, visuals, or claims relative to cannabis regulations, particularly those relevant in Minnesota.\n\nContent: {{{content}}}`,
});

const complianceAnalysisFlow = ai.defineFlow(
  {
    name: 'complianceAnalysisFlow',
    inputSchema: ComplianceAnalysisInputSchema,
    outputSchema: ComplianceAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
