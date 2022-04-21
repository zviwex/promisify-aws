import type { AWSError } from 'aws-sdk';

export const isAwsError = (value: any): value is AWSError =>
	typeof value === 'object' && typeof value?.code === 'string';
