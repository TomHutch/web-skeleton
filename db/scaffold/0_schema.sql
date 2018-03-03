CREATE SCHEMA IF NOT EXISTS skeletons;

CREATE TABLE IF NOT EXISTS skeletons.almanach (
    id SERIAL UNIQUE,
    name VARCHAR,
    description VARCHAR,
    strength INTEGER,
    spookiness INTEGER,
    verisimilitude INTEGER
);

CREATE TABLE IF NOT EXISTS skeletons.votes (
    skeleton_id INTEGER REFERENCES skeletons.almanach (id) ON DELETE CASCADE,
    votes INTEGER
);


-- INSERT row into votes table when new skeleton is added to almanach
CREATE OR REPLACE FUNCTION function_copy() RETURNS TRIGGER AS
    $BODY$
    BEGIN
        INSERT INTO skeletons.votes (skeleton_id, votes) VALUES (new.id, 0);
        RETURN new;
    END;
    $BODY$
    language plpgsql;

CREATE TRIGGER trig_votes_insert
    AFTER INSERT ON skeletons.almanach
    FOR EACH ROW
    EXECUTE PROCEDURE function_copy();
