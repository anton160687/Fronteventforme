type ErrorProps = {
  error: string;
};

function Error({ error }: ErrorProps): JSX.Element {
  return (
    <>
      {error && (
        <p className="text-danger" style={{ whiteSpace: 'pre-wrap' }}>
          {error}
        </p>
      )}
    </>
  );
}
export default Error;
