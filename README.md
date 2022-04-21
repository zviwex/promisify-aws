# promisify-aws
promisify-aws is an aws-sdk V2 enhanced promise which allows users to see stacktraces when the request has failed

## Example

```typescript
async function main() {
  const client = new DynamoDB();

  try {
    await promisifyAwsRequest(client.scan({
      TableName: 'flo', // Not exists
    }));
  }
  catch (err: any) {
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