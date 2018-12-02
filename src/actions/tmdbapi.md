Example data response from TMDB API for `movie/popular?`

```json
{
  "vote_count": 1402,
  "id": 338952,
  "video": false,
  "vote_average": 7.1,
  "title": "Fantastic Beasts: The Crimes of Grindelwald",
  "popularity": 291.648,
  "poster_path": "/uyJgTzAsp3Za2TaPiZt2yaKYRIR.jpg",
  "original_language": "en",
  "original_title": "Fantastic Beasts: The Crimes of Grindelwald",
  "genre_ids": [10751, 14, 12],
  "backdrop_path": "/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg",
  "adult": false,
  "overview": "Lorem Ipsum",
  "release_date": "2018-11-14"
}
```

What the Netflix Clone actually uses:

In the list it gets:
the Title, and uses different classes if it's longer than 20 characters.
the Description, abbreviated if over 150 characters.
And the backdrop path or poster path for the image tile.
