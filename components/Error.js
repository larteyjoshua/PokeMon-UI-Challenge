function Error({ error }) {
  return (
    <div className="text-center">
      <div
        className="px-4 py-4 text-gray bg-purple-300 rounded shadow-lg shadow-purple-500/50"
        role="status"
      >
        {error}
      </div>
    </div>
  );
}

export default Error;
