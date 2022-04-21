
# promisify-aws
[![NPM Version](https://badge.fury.io/js/promisify-aws.svg?style=flat)](https://npmjs.org/package/promisify-aws)

promisify-aws is an aws-sdk V2 enhanced promise which allows users to see stacktraces when the request has failed

[An article explaining the problem and solution](https://medium.com/@zviwex/how-to-fix-async-aws-sdk-useless-error-messages-a19847700a24)
## Example

```typescript
async function main() {
	const client = new DynamoDB();

	try {
		await promisifyAwsRequest(
			client.scan({
				TableName: 'flo', // Not exists
			})
		);
	} catch (err: any) {
		console.error(err);
	}
}

main().catch(console.log);
```

output should be:

```
Error
    at promisifyAwsRequest (.../index.js:12:31)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async main (.../index.js:31:9) {
  message: 'Requested resource not found',
  code: 'ResourceNotFoundException',
  time: 2022-02-22T22:22:22.222Z,
  requestId: 'XXXX',
  statusCode: 400,
  retryable: false,
  retryDelay: 21.800927279989
}
```
