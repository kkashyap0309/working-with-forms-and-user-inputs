export default function Input({ label, id, err, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      <div className="control-error">{err && <p>{err}</p>}</div>
    </>
  );
}
