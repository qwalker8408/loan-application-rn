import qs from 'qs'

export interface PostInterface<T = Record<string, unknown>> {
  url: string;
  variables?: T;
}

export interface GraphqlInterface<T = Record<string, unknown>> {
  query: string;
}

export interface GetInterface<T = Record<string, unknown>> {
  url: string;
  params?: T;
}

interface FetchOptions {
  method: string;
  headers: {
    Authorization: string;
    'Referrer-Policy': string;
    'Content-Type': string;
  };
  body?: string;
}

export async function POST<T>({ url, variables }: PostInterface<T>):
  Promise<{ data: Record<string, unknown>, status: boolean }> {
  try {
    const options: FetchOptions = {
      method: 'POST',
      headers: {
        Authorization: '',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...variables }),
    };
    const response = await fetch(`${process.env.REST_API}/${url}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(JSON.stringify(error, null, 2));
  }
}
export async function GET({ url, params }: GetInterface) {
  try {
    const queryString = params ? `?${qs.stringify(params)}` : '';
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${process.env.REST_API}/${url}${queryString}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(JSON.stringify(error.message, null, 2));
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}
