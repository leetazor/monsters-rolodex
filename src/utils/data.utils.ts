
// generig function
// we know that we are passing a Url string as a parameter,
// and we know that we are getting back a Promise, but
// we don't know what type of data this Promise will resolve into
// <T> is the starting type, paramener names that are most frequesntly used
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
}