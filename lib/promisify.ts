import { isAwsError } from './guards';
import { Request } from 'aws-sdk';

export const promisifyAwsRequest = async <D, E>(request: Request<D, E>) => {
	try {
		return await request.promise();
	} catch (error: unknown) {
		if (isAwsError(error)) {
			const { stack } = new Error();
			error.stack = `${stack}`;
			throw error;
		}

		throw error;
	}
};
