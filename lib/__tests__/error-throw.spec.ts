import { promisifyAwsRequest } from '../promisify';
import { DynamoDB } from 'aws-sdk';

describe('error throw', () => {
	it('error is cached', async () => {
		const client = new DynamoDB();

		try {
			await promisifyAwsRequest(
				client.scan({
					TableName: 'flo',
				})
			);
		} catch (err: unknown) {
			console.error(err);
		}
	});
});

