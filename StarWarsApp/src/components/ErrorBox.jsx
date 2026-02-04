export default function ErrorBox({ message }) {
  return (
    <div className="errorBox">
      <strong>Hata:</strong> {message}
    </div>
  );
}
