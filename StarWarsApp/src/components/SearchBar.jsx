export default function SearchBar({
  value,
  onChange,
  onSubmit,
  onClear,
  disabled,
}) {
  return (
    <form className="search" onSubmit={onSubmit}>
      <label className="searchLabel">Name / Model</label>

      <input
        className="searchInput"
        placeholder="Name / Model"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />

      <button className="btn" type="submit" disabled={disabled}>
        Filter
      </button>

      {value?.trim()?.length > 0 && (
        <button
          className="btn btnGhost"
          type="button"
          onClick={onClear}
          disabled={disabled}
        >
          Clear
        </button>
      )}
    </form>
  );
}
