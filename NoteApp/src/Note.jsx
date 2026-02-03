import React, { useState } from "react";
import "./Note.css";

function Note() {
    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState("");
    const [color, setColor] = useState("rgb(27, 139, 76)"); // Varsayılan yeşil
    const [search, setSearch] = useState("");
    const [selectedColor, setSelectedColor] = useState(null);

    const handleAddNote = () => {
        if (noteText.trim() === "") return;
        const newNote = { text: noteText, color: color };
        setNotes([...notes, newNote]);
        setNoteText("");
    };

    const colorOptions = [
        { name: "Note 1", value: "rgb(219, 39, 99)" },  // Pembe
        { name: "Note 2", value: "rgb(122, 4, 122)" },  // Mor
        { name: "Note 3", value: "rgb(228, 199, 4)" },  // Sarı
        { name: "Note 4", value: "rgb(27, 95, 184)" },  // Mavi
        { name: "Note 5", value: "rgb(27, 139, 76)" }   // Yeşil
    ];

    return (
        <div className="note-container">
            <h3>NotesApp</h3>

            {/* Arama inputu */}
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="note-input">
                <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Enter your note here..."
                />

                <div className="note-container-bottom">
                    {/* Renk seçme butonları */}
                    <div className="buttons">
                        {colorOptions.map(({ value }) => (
                            <button
                                key={value}
                                style={{ backgroundColor: value }}
                                className="color-button"
                                onClick={() => setColor(value)}
                            ></button>
                        ))}
                    </div>

                    {/* Not ekleme butonu */}
                    <button type="submit" className="add-button" onClick={handleAddNote}>
                        ADD
                    </button>
                </div>
            </div>

            {/* Renk filtreleme butonları */}
            <div className="list-buttons">
                {colorOptions.map(({ name, value }) => (
                    <div key={name}>
                        <button
                            className="list-button"
                            style={{ backgroundColor: value }}
                            onClick={() => setSelectedColor(selectedColor === value ? null : value)}
                        >
                            {name}
                        </button>

                        {/* Seçilen renk için notları tek kutuda listele */}
                        {selectedColor === value && (
                            <div className="note-list" style={{ backgroundColor: value }}>
                                {notes
                                    .filter(note => note.color === value && note.text.toLowerCase().includes(search.toLowerCase()))
                                    .map((note, index) => (
                                        <p key={index} className="note-item">{note.text}</p>
                                    ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Note;






