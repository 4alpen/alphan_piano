const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const SONGS = {
  'Turkish March (Mozart)': [
    { note: 'B', duration: 0.25 }, { note: 'A', duration: 0.25 }, { note: 'G#', duration: 0.25 }, { note: 'A', duration: 0.25 },
    { note: 'C', duration: 0.25 }, { note: 'B', duration: 0.25 }, { note: 'A', duration: 0.25 }, { note: 'B', duration: 0.25 },
    { note: 'D', duration: 0.25 }, { note: 'C', duration: 0.25 }, { note: 'B', duration: 0.25 }, { note: 'C', duration: 0.25 },
    { note: 'E', duration: 0.25 }, { note: 'D', duration: 0.25 }, { note: 'C', duration: 0.25 }, { note: 'D', duration: 0.25 },
    { note: 'F', duration: 0.25 }, { note: 'E', duration: 0.25 }, { note: 'D#', duration: 0.25 }, { note: 'E', duration: 0.25 },
    { note: 'B', duration: 0.25 }, { note: 'A', duration: 0.25 }, { note: 'G#', duration: 0.25 }, { note: 'A', duration: 0.25 },
    { note: 'C', duration: 0.25 }, { note: 'B', duration: 0.25 }, { note: 'A', duration: 0.25 }, { note: 'B', duration: 0.25 },
    { note: 'A', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'A', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'A', duration: 0.25 }, { note: 'C', duration: 0.25 }, { note: 'E', duration: 0.25 }, { note: 'A', duration: 0.25 },
    { note: 'B', duration: 0.25 }, { note: 'A', duration: 0.25 }, { note: 'G#', duration: 0.25 }, { note: 'A', duration: 0.25 },
    { note: 'C', duration: 0.25 }, { note: 'B', duration: 0.25 }, { note: 'A', duration: 0.25 }, { note: 'B', duration: 0.25 },
    { note: 'D', duration: 0.25 }, { note: 'C', duration: 0.25 }, { note: 'B', duration: 0.25 }, { note: 'C', duration: 0.25 }
  ],
  'Canon in D (Pachelbel)': [
    { note: 'D', duration: 1 }, { note: 'A', duration: 1 }, { note: 'B', duration: 1 }, { note: 'F#', duration: 1 },
    { note: 'G', duration: 1 }, { note: 'D', duration: 1 }, { note: 'G', duration: 1 }, { note: 'A', duration: 1 },
    { note: 'D', duration: 0.5 }, { note: 'F#', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'F#', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'F#', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'B', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'A', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'B', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'F#', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F#', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F#', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'F#', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'rest', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'B', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'B', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F#', duration: 0.5 }, { note: 'D', duration: 0.5 }
  ],
  'Ode to Joy (Beethoven)': [
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'E', duration: 0.75 }, { note: 'D', duration: 0.25 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 0.75 }, { note: 'C', duration: 0.25 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'C', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.25 }, { note: 'F', duration: 0.25 }, { note: 'E', duration: 0.5 },
    { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.25 }, { note: 'F', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }
  ],
  'Jingle Bells (James Lord Pierpont)': [
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'C', duration: 0.75 }, { note: 'D', duration: 0.25 }, { note: 'E', duration: 2 },
    { note: 'rest', duration: 0.25 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.75 }, { note: 'F', duration: 0.25 },
    { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.25 }, { note: 'E', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 1 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'C', duration: 0.75 }, { note: 'D', duration: 0.25 }, { note: 'E', duration: 2 }
  ],
  'When the Saints Go Marching In': [
    { note: 'C', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 },
    { note: 'rest', duration: 0.25 }, { note: 'C', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 },
    { note: 'rest', duration: 0.25 }, { note: 'C', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 0.75 },
    { note: 'E', duration: 0.25 }, { note: 'C', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 2 },
    { note: 'rest', duration: 0.25 }, { note: 'E', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 2 }, { note: 'rest', duration: 0.25 },
    { note: 'C', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 },
    { note: 'rest', duration: 0.25 }, { note: 'C', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }
  ],
  'İzmir Marşı': [
    { note: 'C', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.75 }, { note: 'G', duration: 0.25 },
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 }, { note: 'C', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.75 }, { note: 'G', duration: 0.25 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 }, { note: 'C', duration: 0.5 },
    { note: 'C', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.75 }, { note: 'B', duration: 0.25 },
    { note: 'C', duration: 1.5 }, { note: 'rest', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'A', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 1 }, { note: 'rest', duration: 0.25 }
  ],
  'İstiklal Marşı': [
    { note: 'C', duration: 0.75 }, { note: 'C', duration: 0.25 }, { note: 'C', duration: 0.75 }, { note: 'D', duration: 0.25 },
    { note: 'E', duration: 0.75 }, { note: 'E', duration: 0.25 }, { note: 'E', duration: 0.75 }, { note: 'F', duration: 0.25 },
    { note: 'G', duration: 1 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'G', duration: 0.75 }, { note: 'G', duration: 0.25 }, { note: 'G', duration: 0.75 }, { note: 'A', duration: 0.25 },
    { note: 'B', duration: 0.75 }, { note: 'B', duration: 0.25 }, { note: 'B', duration: 0.75 }, { note: 'C', duration: 0.25 },
    { note: 'C', duration: 1 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'A', duration: 0.75 }, { note: 'A', duration: 0.25 }, { note: 'A', duration: 0.75 }, { note: 'G', duration: 0.25 },
    { note: 'F#', duration: 0.75 }, { note: 'F#', duration: 0.25 }, { note: 'F#', duration: 0.75 }, { note: 'E', duration: 0.25 },
    { note: 'D', duration: 1 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'F', duration: 0.75 }, { note: 'F', duration: 0.25 }, { note: 'F', duration: 0.75 }, { note: 'E', duration: 0.25 }
  ],
  'Mini Mini Bir Kuş': [
    { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'rest', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 },
    { note: 'G', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 },
    { note: 'G', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'E', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'E', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'G', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 1 }
  ],
  'Çocuklar Gibi': [
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 },
    { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 1 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 },
    { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 1 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.5 }
  ],
  'Kır Zincirlerini': [
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 },
    { note: 'G', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'E', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 }
  ],
  'Fırfırlı Ceket': [
    { note: 'G', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'G', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }
  ],
  'Arı Vız Vız Vız': [
    { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'C', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 },
    { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 }
  ],
  'Bir Kelebek': [
    { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'rest', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 1 }
  ],
  'Dandini Dandini Dastana': [
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 1 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'C', duration: 1 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 1 }, { note: 'D', duration: 1 }
  ],
  'Benim Ellerim': [
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'C', duration: 1 }
  ],
  'Twinkle Twinkle Little Star': [
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, 
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, 
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, 
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, 
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, 
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 1 }
  ],
  'Mary Had a Little Lamb': [
    { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'C', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 },
    { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 }
  ],
  'Old MacDonald Had a Farm': [
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'B', duration: 0.5 }, { note: 'B', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 },
    { note: 'G', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'B', duration: 0.5 }, { note: 'B', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 },
    { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'A', duration: 0.5 }
  ],
  'Row, Row, Row Your Boat': [
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.25 }, { note: 'E', duration: 0.75 },
    { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.25 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.25 }, { note: 'G', duration: 1 },
    { note: 'rest', duration: 0.25 }, { note: 'C', duration: 0.25 }, { note: 'C', duration: 0.25 }, { note: 'C', duration: 0.25 }, { note: 'G', duration: 0.25 }, 
    { note: 'G', duration: 0.25 }, { note: 'G', duration: 0.25 }, { note: 'E', duration: 0.25 }, { note: 'E', duration: 0.25 }, 
    { note: 'E', duration: 0.25 }, { note: 'C', duration: 0.25 }, { note: 'C', duration: 0.25 }, { note: 'C', duration: 0.25 },
    { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.25 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.25 }, { note: 'C', duration: 1 },
    { note: 'rest', duration: 0.25 }, { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, 
    { note: 'D', duration: 0.25 }, { note: 'E', duration: 0.75 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 0.25 }, 
    { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.25 }, { note: 'G', duration: 1 }
  ],
  'The Wheels on the Bus': [
    { note: 'G', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'C', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'C', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'C', duration: 1 }
  ],
  'Baa Baa Black Sheep': [
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'B', duration: 0.5 }, { note: 'B', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 },
    { note: 'B', duration: 0.5 }, { note: 'B', duration: 0.5 }, { note: 'A', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'D', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 },
    { note: 'B', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'G', duration: 1 }, { note: 'A', duration: 1 }
  ],
  'If You\'re Happy and You Know It': [
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'G', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 1 }
  ],
  'Hickory Dickory Dock': [
    { note: 'F', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'F', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'D', duration: 0.5 },
    { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 0.5 },
    { note: 'A', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 1 }
  ],
  'London Bridge is Falling Down': [
    { note: 'G', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'G', duration: 0.5 }, { note: 'A', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'F', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'D', duration: 0.5 }, { note: 'G', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'C', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'D', duration: 0.5 }, { note: 'C', duration: 1 }, { note: 'rest', duration: 0.25 }
  ],
  'Head, Shoulders, Knees, and Toes': [
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'C', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'C', duration: 1 }, { note: 'rest', duration: 0.5 },
    { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'F', duration: 0.5 }, { note: 'G', duration: 1 }, { note: 'rest', duration: 0.25 },
    { note: 'G', duration: 0.25 }, { note: 'A', duration: 0.25 }, { note: 'G', duration: 0.25 }, { note: 'F', duration: 0.25 },
    { note: 'E', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'E', duration: 0.5 }, { note: 'D', duration: 1 },
    { note: 'C', duration: 0.5 }, { note: 'C', duration: 0.5 }, { note: 'D', duration: 0.5 }, { note: 'E', duration: 0.5 },
    { note: 'C', duration: 1 }, { note: 'rest', duration: 0.5 }
  ]
};

const LANGUAGES = {
  en: {
    acemiMode: 'Beginner Mode',
    ozelSarkiOlustur: 'Create Custom Song',
    ozelSarkiyiBitir: 'Finish Custom Song',
    sarkiyiSil: 'Delete Song',
    sonNotayiSil: 'Delete Last Note',
    tumNotalariTemizle: 'Clear All Notes',
    tebrikler: 'Congratulations! Song completed!',
    customSongNamePrompt: 'Enter a name for your custom song:',
    deleteSongConfirm: (songName) => `Are you sure you want to delete the song "${songName}"?`
  },
  tr: {
    acemiMode: 'Acemi Modu',
    ozelSarkiOlustur: 'Özel Şarkı Oluştur',
    ozelSarkiyiBitir: 'Özel Şarkıyı Bitir',
    sarkiyiSil: 'Şarkıyı Sil',
    sonNotayiSil: 'Son Notayı Sil',
    tumNotalariTemizle: 'Tüm Notaları Temizle',
    tebrikler: 'Tebrikler! Şarkı tamamlandı!',
    customSongNamePrompt: 'Özel şarkınız için bir isim girin:',
    deleteSongConfirm: (songName) => `"${songName}" şarkısını silmek istediğinize emin misiniz?`
  }
};

class PianoGame {
  constructor() {
    this.initializeElements();
    this.setupEventListeners();
    this.currentSong = [];
    this.currentIndex = 0;
    this.isAcemiMode = false;
    this.setupAudioContext();
    this.customSongMode = false;
    this.currentLanguage = 'en';
    this.applyLanguage(this.currentLanguage);
    this.autoPlayInterval = null;
  }

  setupAudioContext() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  playNote(frequency) {
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.type = 'triangle';
    oscillator.frequency.value = frequency === 'rest' ? 0 : this.getNoteFrequency(frequency);

    gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 1);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 1);
  }

  getNoteFrequency(note) {
    const frequencies = {
      'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13,
      'E': 329.63, 'F': 349.23, 'F#': 369.99, 'G': 392.00,
      'G#': 415.30, 'A': 440.00, 'A#': 466.16, 'B': 493.88
    };
    return frequencies[note] || 440;
  }

  initializeElements() {
    const container = document.createElement('div');
    container.className = 'game-container';

    const controls = document.createElement('div');
    controls.className = 'controls';

    const songSelect = document.createElement('select');
    songSelect.className = 'song-selector';

    const toggleMode = document.createElement('button');
    toggleMode.className = 'toggle-mode';
    toggleMode.dataset.langKey = 'acemiMode';
    toggleMode.textContent = 'Acemi Modu';

    const addSongBtn = document.createElement('button');
    addSongBtn.className = 'add-song-btn';
    addSongBtn.dataset.langKey = 'ozelSarkiOlustur';
    addSongBtn.textContent = 'Özel Şarkı Oluştur';

    const deleteSongBtn = document.createElement('button');
    deleteSongBtn.className = 'delete-song-btn';
    deleteSongBtn.dataset.langKey = 'sarkiyiSil';
    deleteSongBtn.textContent = 'Şarkıyı Sil';

    const noteDisplay = document.createElement('div');
    noteDisplay.className = 'note-display';

    const piano = document.createElement('div');
    piano.className = 'piano';

    const progress = document.createElement('div');
    progress.className = 'progress';

    const deleteBtnsDiv = document.createElement('div');
    deleteBtnsDiv.className = 'delete-btns';

    const deleteNoteBtn = document.createElement('button');
    deleteNoteBtn.className = 'delete-note-btn';
    deleteNoteBtn.dataset.langKey = 'sonNotayiSil';
    deleteNoteBtn.textContent = 'Son Notayı Sil';

    const clearNotesBtn = document.createElement('button');
    clearNotesBtn.className = 'clear-notes-btn';
    clearNotesBtn.dataset.langKey = 'tumNotalariTemizle';
    clearNotesBtn.textContent = 'Tüm Notaları Temizle';

    const langSelect = document.createElement('select');
    langSelect.className = 'lang-selector';

    controls.appendChild(songSelect);
    controls.appendChild(toggleMode);
    controls.appendChild(addSongBtn);
    controls.appendChild(deleteSongBtn);
    deleteBtnsDiv.appendChild(deleteNoteBtn);
    deleteBtnsDiv.appendChild(clearNotesBtn);
    controls.appendChild(deleteBtnsDiv);
    controls.appendChild(langSelect);

    container.appendChild(controls);
    container.appendChild(noteDisplay);
    container.appendChild(piano);
    container.appendChild(progress);

    document.body.appendChild(container);

    this.elements = {
      container,
      controls,
      songSelect,
      toggleMode,
      noteDisplay,
      piano,
      progress,
      addSongBtn,
      deleteSongBtn,
      deleteNoteBtn,
      clearNotesBtn,
      langSelect
    };
    
    this.createPianoKeys();
    this.setupSongSelector();
    this.setupLangSelector();
  }

  createPianoKeys() {
    NOTES.filter(note => !note.includes('#')).forEach(note => {
      const key = document.createElement('div');
      key.className = 'key white-key';
      key.dataset.note = note;

      const noteLabel = document.createElement('span');
      noteLabel.className = 'note-label';
      noteLabel.textContent = note;
      key.appendChild(noteLabel);

      this.elements.piano.appendChild(key);
    });

    NOTES.filter(note => note.includes('#')).forEach(note => {
      const key = document.createElement('div');
      key.className = 'key black-key';
      key.dataset.note = note;

      const noteLabel = document.createElement('span');
      noteLabel.className = 'note-label';
      noteLabel.textContent = note;
      key.appendChild(noteLabel);

      this.elements.piano.appendChild(key);
    });
  }

  setupSongSelector() {
    Object.keys(SONGS).forEach(songName => {
      const option = document.createElement('option');
      option.value = songName;
      option.textContent = songName;
      this.elements.songSelect.appendChild(option);
    });
  }

  setupLangSelector() {
    const langSelector = this.elements.langSelect;
    const LANGUAGES_ARRAY = [
      { code: 'tr', name: 'Türkçe' },
      { code: 'en', name: 'English' }
    ];
    LANGUAGES_ARRAY.forEach(lang => {
      const option = document.createElement('option');
      option.value = lang.code;
      option.textContent = lang.name;

      if (lang.code === 'en') {
        option.selected = true;
      }

      langSelector.appendChild(option);
    });

    this.currentLanguage = 'en';
    langSelector.value = 'en';
  }

  setupEventListeners() {
    this.elements.songSelect.addEventListener('change', () => this.loadSong());
    this.elements.toggleMode.addEventListener('click', () => this.toggleAcemiMode());
    this.elements.addSongBtn.addEventListener('click', () => this.toggleCustomSongMode());
    this.elements.piano.addEventListener('click', (e) => {
      const key = e.target.closest('.key');
      if (key) this.handleKeyPress(key.dataset.note);
    });
    this.elements.deleteNoteBtn.addEventListener('click', () => this.deleteLastNote());
    this.elements.clearNotesBtn.addEventListener('click', () => this.clearAllNotes());
    this.elements.deleteSongBtn.addEventListener('click', () => this.deleteSong());
    this.elements.langSelect.addEventListener('change', (e) => this.changeLanguage(e.target.value));
    document.addEventListener('keydown', (event) => this.handleKeyboardInput(event));

    const autoPlayBtn = document.createElement('button');
    autoPlayBtn.className = 'auto-play-btn';
    autoPlayBtn.textContent = 'Auto play';
    document.body.insertBefore(autoPlayBtn, document.body.firstChild);
    
    autoPlayBtn.addEventListener('click', () => this.toggleAutoPlay());
  }

  loadSong() {
    const songName = this.elements.songSelect.value;
    this.currentSong = SONGS[songName];
    this.currentIndex = 0;
    this.updateNoteDisplay();
    this.highlightNextNote();
  }

  highlightAllNotes() {
    const keys = this.elements.piano.querySelectorAll('.key');
    keys.forEach(key => key.classList.remove('highlight'));

    if (this.currentSong && this.currentSong.length) {
      this.currentSong.forEach(noteObj => {
        const note = noteObj.note;
        const key = this.getKeyElement(note);
        if (key) {
          key.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.3)';
          setTimeout(() => {
            key.style.boxShadow = 'none';
          }, 200);
        }
      });
    }
  }

  toggleAcemiMode() {
    this.isAcemiMode = !this.isAcemiMode;
    this.elements.toggleMode.style.background = this.isAcemiMode ? '#ff9800' : '#4CAF50';
    this.highlightNextNote();
  }

  toggleCustomSongMode() {
    this.customSongMode = !this.customSongMode;
    this.elements.addSongBtn.textContent = this.customSongMode ? this.getTranslation('ozelSarkiyiBitir') : this.getTranslation('ozelSarkiOlustur');
    this.elements.addSongBtn.style.background = this.customSongMode ? '#ff9800' : '#4CAF50';

    if (!this.customSongMode && this.currentSong.length > 0) {
      const songName = prompt(this.getTranslation('customSongNamePrompt'));
      if (songName && songName.trim()) {
        SONGS[songName] = [...this.currentSong];
        const option = document.createElement('option');
        option.value = songName;
        option.textContent = songName;
        this.elements.songSelect.appendChild(option);
        this.elements.songSelect.value = songName;
      }
    } else if (this.customSongMode) {
      this.currentSong = [];
      this.currentIndex = 0;
      this.updateNoteDisplay();
    }
  }

  handleKeyPress(note) {
    if (note === 'rest') {
      if (this.customSongMode) {
        this.currentSong.push({ note: 'rest', duration: 1 });
        this.updateNoteDisplay();
        return;
      }
      return;
    }

    const key = this.getKeyElement(note);

    if (this.customSongMode) {
      this.currentSong.push({ note: note, duration: 1 });
      this.updateNoteDisplay();
      this.playNote(note);
      this.handleCorrectNote(key);
      return;
    }

    if (!this.currentSong.length) {
      this.playNote(note);
      key.classList.add('success');
      setTimeout(() => key.classList.remove('success'), 200);
      return;
    }

    const currentNoteObj = this.currentSong[this.currentIndex];
    const currentNote = currentNoteObj.note;
    this.playNote(note);

    if (note === currentNote) {
      this.handleCorrectNote(key);
      if (this.currentIndex < this.currentSong.length) {
        this.highlightNextNote();
      }
    } else {
      this.handleIncorrectNote(key);
    }
  }

  handleCorrectNote(key) {
    key.classList.add('success');
    setTimeout(() => key.classList.remove('success'), 200);

    this.currentIndex++;
    if (this.currentIndex >= this.currentSong.length) {
      this.celebrateCompletion();
      this.currentIndex = 0;
    }

    this.updateNoteDisplay();
  }

  handleIncorrectNote(key) {
    key.classList.add('error');
    setTimeout(() => key.classList.remove('error'), 200);
  }

  updateNoteDisplay() {
    this.elements.noteDisplay.innerHTML = '';
    const notes = this.customSongMode ? this.currentSong : this.currentSong.slice(this.currentIndex);

    notes.forEach((noteObj, index) => {
      const noteBox = document.createElement('div');
      noteBox.className = 'note-box';
      noteBox.textContent = noteObj.note;
      if (noteObj.note === 'rest') {
        noteBox.textContent = '—';
        noteBox.style.backgroundColor = '#555';
      }
      if (!this.customSongMode && index === 0) {
        noteBox.classList.add('current-note');
      }
      this.elements.noteDisplay.appendChild(noteBox);
    });
  }

  highlightNextNote() {
    const keys = this.elements.piano.querySelectorAll('.key');
    keys.forEach(key => key.classList.remove('highlight'));

    if (this.isAcemiMode && this.currentSong.length) {
      const nextNoteObj = this.currentSong[this.currentIndex];
      const nextNote = nextNoteObj.note;
      if (nextNote !== 'rest') {
        const nextKey = this.getKeyElement(nextNote);
        if (nextKey) nextKey.classList.add('highlight');
      }
    }
  }

  getKeyElement(note) {
    return this.elements.piano.querySelector(`[data-note="${note}"]`);
  }

  celebrateCompletion() {
    this.elements.progress.textContent = this.getTranslation('tebrikler');
    setTimeout(() => {
      this.elements.progress.textContent = '';
    }, 2000);
  }

  deleteLastNote() {
    if (this.customSongMode && this.currentSong.length > 0) {
      this.currentSong.pop();
      this.updateNoteDisplay();
    }
  }

  clearAllNotes() {
    if (this.customSongMode) {
      this.currentSong = [];
      this.updateNoteDisplay();
    }
  }

  deleteSong() {
    const songName = this.elements.songSelect.value;
    if (songName && confirm(this.getTranslation('deleteSongConfirm')(songName))) {
      delete SONGS[songName];
      this.elements.songSelect.remove(this.elements.songSelect.selectedIndex);
      this.currentSong = [];
      this.currentIndex = 0;
      this.updateNoteDisplay();
    }
  }

  changeLanguage(langCode) {
    this.currentLanguage = langCode;
    this.applyLanguage(langCode);
  }

  applyLanguage(langCode) {
    const langData = LANGUAGES[langCode];
    if (langData) {
      Object.keys(langData).forEach(key => {
        const element = document.querySelector(`[data-lang-key="${key}"]`);
        if (element) {
          element.textContent = langData[key];
        }
      });
      if (this.customSongMode) {
        this.elements.addSongBtn.textContent = this.getTranslation('ozelSarkiyiBitir');
      } else {
        this.elements.addSongBtn.textContent = this.getTranslation('ozelSarkiOlustur');
      }
    }
  }

  getTranslation(key) {
    return LANGUAGES[this.currentLanguage][key] || LANGUAGES['en'][key];
  }

  handleKeyboardInput(event) {
    const keyMap = {
      'z': 'C', 'x': 'D', 'c': 'E', 'v': 'F', 'b': 'G', 'n': 'A', 'm': 'B',
      's': 'C#', 'd': 'D#', 'g': 'F#', 'h': 'G#', 'j': 'A#'
    };
    const note = keyMap[event.key.toLowerCase()];
    if (note) {
      this.handleKeyPress(note);
      const keyElement = this.getKeyElement(note);
      if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 100);
      }
    }
  }

  toggleAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
      document.querySelector('.auto-play-btn').textContent = 'Auto play';
      document.querySelector('.auto-play-btn').style.backgroundColor = '#3b5998';
      return;
    }
    
    document.querySelector('.auto-play-btn').textContent = 'Stop';
    document.querySelector('.auto-play-btn').style.backgroundColor = '#ff4444';
    
    let lastPlayTime = Date.now();
    const playNext = () => {
      if (this.currentSong && this.currentSong.length) {
        // Reset to beginning if we're at the end
        if (this.currentIndex >= this.currentSong.length) {
          this.currentIndex = 0;
          this.updateNoteDisplay();
        }
        
        const noteObj = this.currentSong[this.currentIndex];
        const note = noteObj.note;
        const duration = noteObj.duration * 500; // Convert duration to milliseconds
        
        const currentTime = Date.now();
        if (currentTime - lastPlayTime >= duration) {
          if (note !== 'rest') {
            const key = this.getKeyElement(note);
            if (key) {
              key.classList.add('highlight');
              this.playNote(note);
              setTimeout(() => key.classList.remove('highlight'), 200);
            }
          }
          
          this.currentIndex++;
          lastPlayTime = currentTime;
          this.updateNoteDisplay();
          this.highlightNextNote();
        }
      }
    };
    
    // Use faster interval for more responsive playing
    this.autoPlayInterval = setInterval(playNext, 50);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Object.keys(SONGS).forEach(songName => {
    if (Array.isArray(SONGS[songName]) && typeof SONGS[songName][0] === 'string') {
      SONGS[songName] = SONGS[songName].map(note => ({ note, duration: 1 }));
    }
  });
  
  const game = new PianoGame();
});