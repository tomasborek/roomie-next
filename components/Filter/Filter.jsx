import React, { useState, useEffect } from "react";
//Axios

//Components
import Tag from "../Tag/Tag";
import LocationDropdown from "../LocationDropdown/LocationDropdown";
//Mui components
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

const Filter = ({
  variant,
  setOpen,
  activeFilters,
  setActiveFilters,
  applyFilters,
}) => {
  //Person state tags
  const [genderTag, setGenderTag] = useState([]);
  const [ageTag, setAgeTag] = useState([]);
  const [smokingTag, setSmokingTag] = useState("");
  const [jobTag, setJobTag] = useState([]);
  //Flat state tags
  const [layoutTag, setLayoutTag] = useState("");
  const [petAllowedTag, setPetAllowedTag] = useState("");
  const [smokingAllowedTag, setSmokingAllowedTag] = useState("");
  const [locationTag, setLocationTag] = useState("");
  const [elevatorTag, setElevatorTag] = useState("");
  const [internetTag, setInternetTag] = useState("");

  useEffect(() => {
    fillExistingFilters();
  }, [activeFilters]);

  //Functions
  const fillExistingFilters = () => {
    if (variant === "flatmate") {
      setGenderTag(activeFilters.gender ? activeFilters.gender : []);
      setAgeTag(activeFilters.age ? activeFilters.age : []);
      setSmokingTag(activeFilters.smoking ? activeFilters.smoking : "");
      setJobTag(activeFilters.job ? activeFilters.job : []);
      setLocationTag(activeFilters.location ? activeFilters.location : "");
    }
    if (variant === "flat") {
      setLocationTag(activeFilters.location ? activeFilters.location : "");
      setLayoutTag(activeFilters.layout ? activeFilters.layout : "");
      setInternetTag(activeFilters.internet ? activeFilters.internet : "");
      setElevatorTag(activeFilters.elevator ? activeFilters.elevator : "");
      setPetAllowedTag(
        activeFilters.petAllowed ? activeFilters.petAllowed : ""
      );
      setSmokingAllowedTag(
        activeFilters.smokingAllowed ? activeFilters.smokingAllowed : ""
      );
    }
  };

  const handleAdd = () => {
    if (variant === "flatmate") {
      let addObject = {};
      genderTag.length ? (addObject.gender = genderTag) : "";
      ageTag.length ? (addObject.age = ageTag) : "";
      smokingTag ? (addObject.smoking = smokingTag) : "";
      jobTag.length ? (addObject.job = jobTag) : "";
      locationTag ? (addObject.location = locationTag) : "";
      setActiveFilters(addObject);
      applyFilters(addObject);
    }
    if (variant === "flat") {
      let addObject = {};
      locationTag ? (addObject.location = locationTag) : "";
      layoutTag ? (addObject.layout = layoutTag) : "";
      elevatorTag ? (addObject.elevator = elevatorTag) : "";
      internetTag ? (addObject.internet = internetTag) : "";
      petAllowedTag ? (addObject.petAllowed = petAllowedTag) : "";
      smokingAllowedTag ? (addObject.smokingAllowed = smokingAllowedTag) : "";
      setActiveFilters(addObject);
      applyFilters(addObject);
    }
    setOpen(false);
  };

  const handleRemove = () => {
    setGenderTag([]);
    setAgeTag([]);
    setSmokingTag("");
    setJobTag([]);
    setLayoutTag("");
    setPetAllowedTag("");
    setSmokingAllowedTag("");
    applyFilters({});
    setActiveFilters({});
    setOpen(false);
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="filter">
      <i
        onClick={() => setOpen(false)}
        className="filter-close fas fa-times"
      ></i>
      <div className="filter-header">
        {variant === "flatmate" ? "Filtrovat lidi" : "Filtrovat byty"}
      </div>
      <div className="filter-description">
        Zde m????ete zadat va??e preference
        {variant === "flatmate"
          ? " ide??ln??ho spolubydl??c??ho."
          : " ide??ln??ho bydlen??."}{" "}
        Zaklikejte hodnoty, podle kter??ch chcete filtrovat, ostatn?? m????ete
        nechat pr??zdn??.
      </div>
      {variant === "flatmate" && (
        <>
          <section className="filter-section">
            <div className="section-header">Lokace</div>
            <div className="section-tags">
              <LocationDropdown
                location={locationTag}
                setLocation={setLocationTag}
              />
            </div>
          </section>
          <section className="filter-section">
            <div className="section-tags">
              <Tag active={locationTag}>
                {locationTag ? locationTag : "Vyberte lokaci"}
              </Tag>
            </div>
          </section>
          <section className="filter-section">
            <p className="section-header">Pohlav??</p>
            <div className="section-tags">
              <Tag
                active={genderTag.includes("Mu??")}
                onClick={() => {
                  let value = "Mu??";
                  if (genderTag.includes(value)) {
                    setGenderTag((prevState) =>
                      prevState.filter((item) => item != value)
                    );
                  } else {
                    if (genderTag.length === 2) {
                      setGenderTag([]);
                    } else {
                      setGenderTag((prevState) => [...prevState, value]);
                    }
                  }
                }}
              >
                Mu??
              </Tag>
              <Tag
                active={genderTag.includes("??ena")}
                onClick={() => {
                  let value = "??ena";
                  if (genderTag.includes(value)) {
                    setGenderTag((prevState) =>
                      prevState.filter((item) => item != value)
                    );
                  } else {
                    if (genderTag.length === 2) {
                      setGenderTag([]);
                    } else {
                      setGenderTag((prevState) => [...prevState, value]);
                    }
                  }
                }}
              >
                ??ena
              </Tag>
              <Tag
                active={genderTag.includes("Jin??")}
                onClick={() => {
                  let value = "Jin??";

                  if (genderTag.includes(value)) {
                    setGenderTag((prevState) =>
                      prevState.filter((item) => item != value)
                    );
                  } else {
                    if (genderTag.length === 2) {
                      setGenderTag([]);
                    } else {
                      setGenderTag((prevState) => [...prevState, value]);
                    }
                  }
                }}
              >
                Jin??
              </Tag>
            </div>
          </section>

          <section className="filter-section">
            <p className="section-header">V??k</p>
            <div className="section-tags">
              <Tag
                active={ageTag.includes("18-25")}
                onClick={() => {
                  let value = "18-25";

                  if (ageTag.includes(value)) {
                    setAgeTag((prevState) =>
                      prevState.filter((item) => item != value)
                    );
                  } else {
                    if (ageTag.length === 2) {
                      setAgeTag([]);
                    } else {
                      setAgeTag((prevState) => [...prevState, value]);
                    }
                  }
                }}
              >
                18-25
              </Tag>
              <Tag
                active={ageTag.includes("25-35")}
                onClick={() => {
                  let value = "25-35";

                  if (ageTag.includes(value)) {
                    setAgeTag((prevState) =>
                      prevState.filter((item) => item != value)
                    );
                  } else {
                    if (ageTag.length === 2) {
                      setAgeTag([]);
                    } else {
                      setAgeTag((prevState) => [...prevState, value]);
                    }
                  }
                }}
              >
                25-35
              </Tag>
              <Tag
                active={ageTag.includes("35+")}
                onClick={() => {
                  let value = "35+";

                  if (ageTag.includes(value)) {
                    setAgeTag((prevState) =>
                      prevState.filter((item) => item != value)
                    );
                  } else {
                    if (ageTag.length === 2) {
                      setAgeTag([]);
                    } else {
                      setAgeTag((prevState) => [...prevState, value]);
                    }
                  }
                }}
              >
                35+
              </Tag>
            </div>
          </section>

          <section className="filter-section">
            <p className="section-header">Kou??en??</p>
            <div className="section-tags">
              <Tag
                active={smokingTag === "Ku????k"}
                onClick={() =>
                  setSmokingTag(smokingTag === "Ku????k" ? "" : "Ku????k")
                }
              >
                Ku????k
              </Tag>
              <Tag
                active={smokingTag === "Neku????k"}
                onClick={() =>
                  setSmokingTag(smokingTag === "Neku????k" ? "" : "Neku????k")
                }
              >
                Neku????k
              </Tag>
            </div>
          </section>
          <section className="filter-section">
            <p className="section-header">Zam??stn??n??</p>
            <div className="section-tags">
              <Tag
                active={jobTag.includes("Zam??stnan??")}
                onClick={() => {
                  let value = "Zam??stnan??";
                  if (jobTag.includes(value)) {
                    setJobTag((prevState) =>
                      prevState.filter((item) => item != value)
                    );
                  } else {
                    if (jobTag.length === 2) {
                      setJobTag([]);
                    } else {
                      setJobTag((prevState) => [...prevState, value]);
                    }
                  }
                }}
              >
                Zam??stnan??
              </Tag>
              <Tag
                active={jobTag.includes("Nezam??stnan??")}
                onClick={() => {
                  let value = "Nezam??stnan??";
                  if (jobTag.includes(value)) {
                    setJobTag((prevState) =>
                      prevState.filter((item) => item != value)
                    );
                  } else {
                    if (jobTag.length === 2) {
                      setJobTag([]);
                    } else {
                      setJobTag((prevState) => [...prevState, value]);
                    }
                  }
                }}
              >
                Nezam??stnan??
              </Tag>
              <Tag
                active={jobTag.includes("Student")}
                onClick={() => {
                  let value = "Student";
                  if (jobTag.includes(value)) {
                    setJobTag((prevState) =>
                      prevState.filter((item) => item != value)
                    );
                  } else {
                    if (jobTag.length === 2) {
                      setJobTag([]);
                    } else {
                      setJobTag((prevState) => [...prevState, value]);
                    }
                  }
                }}
              >
                Student
              </Tag>
            </div>
          </section>
        </>
      )}

      {variant === "flat" && (
        <>
          <section className="filter-section">
            <div className="section-header">Lokace</div>
            <div className="section-tags">
              <LocationDropdown
                location={locationTag}
                setLocation={setLocationTag}
              />
            </div>
          </section>

          <section className="filter-section">
            <div className="section-header">Dispozice</div>
            <div className="section-tags">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Dispozice</InputLabel>
                <Select
                  label="Dispozice"
                  onChange={(e) =>
                    setLayoutTag(
                      e.target.value === "none" ? "" : e.target.value
                    )
                  }
                  value={layoutTag ? layoutTag : "none"}
                >
                  <MenuItem value={"none"}>Libovoln??</MenuItem>
                  <MenuItem value={"1+1"}>1+1</MenuItem>
                  <MenuItem value={"1+kk"}>1+kk</MenuItem>
                  <MenuItem value={"2+1"}>2+1</MenuItem>
                  <MenuItem value={"2+kk"}>2+kk</MenuItem>
                  <MenuItem value={"3+1"}>3+1</MenuItem>
                  <MenuItem value={"3+kk"}>3+kk</MenuItem>
                  <MenuItem value={"4+1"}>4+1</MenuItem>
                  <MenuItem value={"4+kk"}>4+kk</MenuItem>
                </Select>
              </FormControl>
            </div>
          </section>

          <section className="filter-section">
            <div className="section-header">V??tah</div>
            <div className="section-tags">
              <Tag
                active={elevatorTag === "V??tah"}
                onClick={() =>
                  setElevatorTag(elevatorTag === "V??tah" ? "" : "V??tah")
                }
                variant="box"
                icon="caret-square-up"
              >
                Ano
              </Tag>
              <Tag
                active={elevatorTag === "Bez v??tahu"}
                onClick={() =>
                  setElevatorTag(
                    elevatorTag === "Bez v??tahu" ? "" : "Bez v??tahu"
                  )
                }
                variant="box"
                icon="caret-square-up"
              >
                Ne
              </Tag>
            </div>
          </section>

          <section className="filter-section">
            <div className="section-header">Internet</div>
            <div className="section-tags">
              <Tag
                active={internetTag === "Internet"}
                onClick={() =>
                  setInternetTag(internetTag === "Internet" ? "" : "Internet")
                }
                variant="box"
                icon="wifi"
              >
                Ano
              </Tag>
              <Tag
                active={internetTag === "Bez internetu"}
                onClick={() =>
                  setInternetTag(
                    internetTag === "Bez internetu" ? "" : "Bez internetu"
                  )
                }
                variant="box"
                icon="wifi"
              >
                Ne
              </Tag>
            </div>
          </section>

          <section className="filter-section">
            <div className="section-header">Mazl????ci</div>
            <div className="section-tags">
              <Tag
                active={petAllowedTag === "Mazl????ci povoleno"}
                onClick={() =>
                  setPetAllowedTag(
                    petAllowedTag === "Mazl????ci povoleno"
                      ? ""
                      : "Mazl????ci povoleno"
                  )
                }
                variant="box"
                icon="dog"
              >
                Povoleno
              </Tag>
              <Tag
                active={petAllowedTag === "Mazl????ci nepovoleno"}
                onClick={() =>
                  setPetAllowedTag(
                    petAllowedTag === "Mazl????ci nepovoleno"
                      ? ""
                      : "Mazl????ci nepovoleno"
                  )
                }
                variant="box"
                icon="dog"
              >
                Nepovoleno
              </Tag>
            </div>
          </section>

          <section className="filter-section">
            <div className="section-header">Kou??en??</div>
            <div className="section-tags">
              <Tag
                active={smokingAllowedTag === "Kou??en?? povoleno"}
                onClick={() =>
                  setSmokingAllowedTag(
                    smokingAllowedTag === "Kou??en?? povoleno"
                      ? ""
                      : "Kou??en?? povoleno"
                  )
                }
                variant="box"
                icon="smoking"
              >
                Povoleno
              </Tag>
              <Tag
                active={smokingAllowedTag === "Kou??en?? nepovoleno"}
                onClick={() =>
                  setSmokingAllowedTag(
                    smokingAllowedTag === "Kou??en?? nepovoleno"
                      ? ""
                      : "Kou??en?? nepovoleno"
                  )
                }
                variant="box"
                icon="smoking"
              >
                Nepovoleno
              </Tag>
            </div>
          </section>
        </>
      )}
      <div className="filter-buttons">
        <button onClick={() => handleAdd()} className="main-btn">
          P??idat filtry
        </button>
        <button onClick={() => handleRemove()} className="general-btn">
          Odebrat filtry
        </button>
      </div>
    </div>
  );
};

export default Filter;
