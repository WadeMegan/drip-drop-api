CREATE TABLE drip_drop_plants (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    water_every INTEGER NOT NULL,
    watering_directions TEXT NOT NULL,
    img TEXT NOT NULL
);