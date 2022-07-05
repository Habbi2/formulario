import { TextField, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { MenuItem, Autocomplete } from "@mui/material";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const gender = [
  { id: "F", name: "Femenino" },
  { id: "M", name: "Masculino" },
  { id: "O", name: "Otro" },
];

const modalities = [
  { id: 0, name: "Modalidad Presencial" },
  { id: 1, name: "Modalidad Virtual" },
];

const equivalencies = [
  { id: 0, name: "Si" },
  { id: 1, name: "No" },
];

const mediums = [
  { id: 0, name: "Alumnos/Graduados" },
  { id: 1, name: "Amigos/Conocidos" },
  { id: 2, name: "Carteles en vía pública" },
  { id: 3, name: "Circula por la zona" },
  { id: 4, name: "Eventos en colegios secundarios" },
  { id: 5, name: "Expo Universidad" },
  { id: 6, name: "Guía de carreras" },
  { id: 7, name: "Otra Persona" },
  { id: 8, name: "Internet/Buscadores" },
  { id: 9, name: "Portales de búsqueda de personas" },
  { id: 10, name: "Profesionales/Docentes" },
  { id: 11, name: "Publicidad en medios gráficos" },
  { id: 12, name: "Radio" },
  { id: 13, name: "Redes sociales" },
  { id: 14, name: "Otros" },
];
const studies = [
  { id: 0, name: "Con estudios secundarios" },
  { id: 1, name: "Sin estudios secundarios (Art. 7)" },
];

const AdminView = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState("");
  const [selectedCareer, setSelectedCareer] = useState("241");
  const [beggining, setBeggining] = useState([{ id: 1, turno: "Mañana" }]);
  const [highschools, setHighschools] = useState([]);
  const [localties, setLocalties] = useState([
    { id: 1316, nombre: "Colegiales" },
  ]);

  const [localties2, setLocalties2] = useState([
    { id: 1316, nombre: "Colegiales" },
  ]);

  const [localties3, setLocalties3] = useState([
    { id: 1316, nombre: "Colegiales" },
  ]);
  const [cities, setCities] = useState([
    { id: 56, nombre: "Ciudad de Buenos Aires" },
  ]);

  const [cities2, setCities2] = useState([
    { id: 56, nombre: "Ciudad de Buenos Aires" },
  ]);

  const [cities3, setCities3] = useState([
    { id: 56, nombre: "Ciudad de Buenos Aires" },
  ]);
  const [careers, setCareers] = useState([
    {
      nombreCarrera: "Licenciatura en Administración de Sistemas",
      identificador: "241",
    },
  ]);

  const [countries, setCountries] = useState([
    {
      id: 2,
      nombre: "Argentina",
    },
  ]);

  const [countries2, setCountries2] = useState([
    {
      id: 2,
      nombre: "Argentina",
    },
  ]);
  const [countries3, setCountries3] = useState([
    {
      id: 2,
      nombre: "Argentina",
    },
  ]);

  const [titles, setTitles] = useState([]);

  const [beginning, setBeginning] = useState([
    {
      name: "31/08/2022",
      anio: 2022,
      desciptionTurno: "2º Cuatrimestre",
      fecha: "31/08/2022",
      id: 318,
    },
  ]);
  const [form, setForm] = useState({
    datosPersonales: {
      nombres: "",
      apellidos: "",
      fechaNacimiento: "",
      sexo: "M",
    },
    lugarNacimiento: {
      paisNacimiento: {
        id: 2,
      },
      provinciaNacimiento: {
        id: 56,
      },
      localidadNacimiento: {
        id: 1316,
      },
      nacionalidadId: 2,
    },
    documentos: {
      tipoDocumento: "DNI",
      documento: "",
      pasaporte: null,
      paisEmision: null,
    },
    domicilioParticular: {
      domicilio: "",
      altura: "",
      piso: null,
      depto: null,
      pais: {
        id: 2,
      },
      provincia: {
        id: 56,
      },
      localidad: {
        id: 1316,
      },
      codigoPostal: null,
      telefono: "",
      telefono2: null,
      celular: "",
      email: "",
    },
    datosAcademicosSecundario: {
      tipoSecundario: "SECU",
      nivelEducacion: "Con estudios secundarios",
      institutoEducacion: {
        id: 2345,
      },
      titulo: "",
      calenTurno: 315,
      fechaEgresoSec: "",
      paisEdu: {
        id: 2,
      },
      provinciaEdu: {
        id: 56,
      },
      localidadEdu: {
        id: 1316,
      },
    },
    planEstudio: {
      identificador: "ABO",
    },
    calendariosCursadas: {
      id: 256,
    },
    modalidadCursado: {
      id: 2,
    },
    isEquivalenciasUniv: false,
    medioConocimiento: "Alumnos/Graduados",
  });

  const [state, setState] = useState({
    error: "",
    style: { m: 1, width: "18vw" },
    inputStyle: {
      marginRight: "0.5vw",
      marginTop: "1vh",
      marginBottom: "2vh",
      width: "12vw",
      height: "5vh",
    },
  });

  useEffect(() => {
    async function setStates() {
      const careersList = await axios.get(
        "https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/v1/solicitud/carreras"
      );
      const countriesList = await axios.get(
        "https://portal.udemm.edu.ar/api/pais"
      );
      const modalityList = await axios.get(
        `https://portal.udemm.edu.ar/api/v1/solicitud/incioCursada`
      );
      const titlesList = await axios.get(
        "https://academic-bankend-spq6ut2ogq-rj.a.run.app/api/v1/solicitud/titulos"
      );
      const highschoolsList = await axios.get(
        "https://portal.udemm.edu.ar/api/v1/solicitud/colegios"
      );
      setCareers(careersList.data);
      setCountries(countriesList.data);
      setCountries2(countriesList.data);
      setCountries3(countriesList.data);
      setBeginning(modalityList.data);
      setHighschools(highschoolsList.data);
      setTitles(titlesList.data);
    }
    setStates();
  }, []);

  useEffect(() => {
    async function setModalities() {
      const modalityList = await axios.get(
        `https://portal.udemm.edu.ar/api/v1/solicitud/modalidadCursado/${selectedCareer}`
      );
      setBeggining(modalityList.data);
    }
    setModalities();
  }, [selectedCareer]);

  useEffect(() => {
    async function setcity() {
      const citiesList = await axios.get(
        `https://portal.udemm.edu.ar/api/provincia/${form.lugarNacimiento.paisNacimiento.id}`
      );
      setCities(citiesList.data);
    }
    setcity();
  }, [form.lugarNacimiento.paisNacimiento.id]);

  useEffect(() => {
    async function setcity() {
      const citiesList = await axios.get(
        `https://portal.udemm.edu.ar/api/provincia/${form.domicilioParticular.pais.id}`
      );
      setCities2(citiesList.data);
    }
    setcity();
  }, [form.domicilioParticular.pais.id]);

  useEffect(() => {
    async function setcity() {
      const citiesList = await axios.get(
        `https://portal.udemm.edu.ar/api/provincia/${form.datosAcademicosSecundario.paisEdu.id}`
      );
      setCities3(citiesList.data);
    }
    setcity();
  }, [form.datosAcademicosSecundario.paisEdu.id]);

  useEffect(() => {
    async function setProvincies() {
      const localtiesList = await axios.get(
        `https://portal.udemm.edu.ar/api/localidad/${form.lugarNacimiento.provinciaNacimiento.id}`
      );
      setLocalties(localtiesList.data);
    }
    setProvincies();
  }, [form.lugarNacimiento.provinciaNacimiento.id]);

  useEffect(() => {
    async function setProvincies() {
      const localtiesList = await axios.get(
        `https://portal.udemm.edu.ar/api/localidad/${form.domicilioParticular.provincia.id}`
      );
      setLocalties2(localtiesList.data);
    }
    setProvincies();
  }, [form.domicilioParticular.provincia.id]);

  useEffect(() => {
    async function setProvincies() {
      const localtiesList = await axios.get(
        `https://portal.udemm.edu.ar/api/localidad/${form.datosAcademicosSecundario.provinciaEdu.id}`
      );
      setLocalties3(localtiesList.data);
    }
    setProvincies();
  }, [form.datosAcademicosSecundario.provinciaEdu.id]);

  useEffect(() => {
    const handleReCaptchaVerify = async () => {
      if (!executeRecaptcha) {
        return;
      }

      const token = await executeRecaptcha("formularioInscripcion");
      setToken(token);
    };
    handleReCaptchaVerify();
  }, [executeRecaptcha]);

  const createTextField = (name, label, sx, index, place) => {
    return (
      <TextField
        key={index}
        sx={sx}
        error={state.error === name}
        label={label}
        name={name}
        variant="outlined"
        onChange={(e) => handleChange(e, place)}
        helperText={state.error === name ? "Respuesta Inválida" : ""}
      ></TextField>
    );
  };

  const createButtons = (names, labels, sx, place = "datosPersonales") => {
    return names.map((v, i) => {
      return createTextField(names[i], labels[i], sx, i, place);
    });
  };

  const handleChange = (e, place) => {
    setForm({
      ...form,
      [place]: { ...form[place], [e.target.name]: e.target.value },
    });
  };

  const handleChangeMediums = (e) => {
    setForm({
      ...form,
      medioConocimiento: e.target.value,
    });
  };

  const handleEmptyValue = (form) => {
    setState({ ...state, error: "" });
    const keys = Object.keys(form);
    const values = Object.values(form);
    for (let i = 0; i < values.length; i++) {
      if (values[i] === "") {
        setState({ ...state, error: keys[i] });
        return false;
      }
    }
    return true;
  };

  const handleChangePersonal = (e) => {
    setForm({
      ...form,
      datosPersonales: {
        ...form.datosPersonales,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleChangeDocument = (e) => {
    setForm({
      ...form,
      documentos: {
        ...form.documentos,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleChangeCountry = (e) => {
    if (e.target.name === "nacionalidadID") {
      setForm({
        ...form,
        lugarNacimiento: {
          ...form.lugarNacimiento,
          [e.target.name]: e.target.value,
        },
      });
      return;
    }
    setForm({
      ...form,
      lugarNacimiento: {
        ...form.lugarNacimiento,
        [e.target.name]: { id: e.target.value },
      },
    });
  };

  const handleChangeCountry2 = (e) => {
    setForm({
      ...form,
      domicilioParticular: {
        ...form.domicilioParticular,
        [e.target.name]: { id: e.target.value },
      },
    });
  };

  const handleChangeStudies = (e) => {
    setForm({
      ...form,
      datosAcademicosSecundario: {
        ...form.datosAcademicosSecundario,
        nivelEducacion: e.target.value,
      },
    });
  };

  const handleEquivalencies = (e) => {
    if (e.target.value === "Si") {
      setForm({
        ...form,
        isEquivalenciasUniv: true,
      });
    } else {
      setForm({
        ...form,
        isEquivalenciasUniv: false,
      });
    }
  };

  const handleChangeCountry3 = (e) => {
    setForm({
      ...form,
      datosAcademicosSecundario: {
        ...form.datosAcademicosSecundario,
        [e.target.name]: { id: e.target.value },
      },
    });
  };

  const handleCareerChange = (e) => {
    setSelectedCareer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleEmptyValue(form.datosPersonales);
    if (handleEmptyValue(form.datosPersonales))
      handleEmptyValue(form.documentos);
    if (
      handleEmptyValue(form.datosPersonales) &&
      handleEmptyValue(form.documentos)
    )
      handleEmptyValue(form.domicilioParticular);
    if (
      handleEmptyValue(form.datosPersonales) &&
      handleEmptyValue(form.documentos) &&
      handleEmptyValue(form.domicilioParticular)
    ) {
      handleEmptyValue(form.datosAcademicosSecundario);
    }
    if (
      handleEmptyValue(form.datosPersonales) &&
      handleEmptyValue(form.documentos) &&
      handleEmptyValue(form.domicilioParticular) &&
      handleEmptyValue(form.datosAcademicosSecundario)
    ) {
      await axios
        .post("https://portal.udemm.edu.ar/api/v1/solicitud/guardar", {
          ...form,
          token: token,
        })
        .then((e) => {
          if (e.status === 201) window.location.replace(e.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        marginLeft: "15vw",
        marginRight: "10vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Box>
          <h1>SOLICITUD DE ADMISIÓN</h1>
          <h3>Datos de la carrera elegida</h3> {}
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            label="Carrera"
            defaultValue={241}
            onChange={(e) => handleCareerChange(e)}
            helperText="Elegí tu carrera"
          >
            {careers.map((value, index) => (
              <MenuItem key={index} value={value.identificador}>
                {value.nombreCarrera}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            label="Modalidad de cursada (*)"
            defaultValue={0}
          >
            {modalities.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            label="Turno Elegido (*)"
            defaultValue={1}
          >
            {beggining.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.turno}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            label="Inicio de cursada (*)"
            defaultValue={`31/08/2022`}
          >
            {beginning.map((value, index) => (
              <MenuItem key={index} value={value.fecha}>
                {value.fecha}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            label="Solicita equivalencias (*)"
            defaultValue={1}
            onChange={(e) => handleEquivalencies(e)}
          >
            {equivalencies.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.name}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <h3>Datos Personales</h3>
          <p>Datos Identificatorios</p>
          <Box>
            {createButtons(
              ["nombres", "apellidos"],
              ["Nombre (*)", "Apellido (*)"],
              state.inputStyle
            )}
          </Box>
          <Box>
            {createButtons(
              ["fechaNacimiento"],
              ["Fecha de nacimiento (*)"],
              state.inputStyle
            )}
            <TextField
              id="outlined-select-career"
              sx={state.inputStyle}
              select
              name="sexo"
              label="Género (*)"
              defaultValue={"M"}
              onChange={(e) => handleChangePersonal(e)}
            >
              {gender.map((value, index) => (
                <MenuItem key={index} value={value.id}>
                  {value.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <p>Lugar de Nacimiento</p>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="paisNacimiento"
            label="País (*)"
            defaultValue={2}
            onChange={(e) => handleChangeCountry(e)}
          >
            {countries.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="provinciaNacimiento"
            label="Provincia (*)"
            defaultValue={56}
            onChange={(e) => handleChangeCountry(e)}
          >
            {cities.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="localidadNacimiento"
            label="Localidad (*)"
            defaultValue={1316}
            onChange={(e) => handleChangeCountry(e)}
          >
            {localties.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-nacionality"
            sx={state.inputStyle}
            name="nacionalidadID"
            select
            label="Nacionalidad (*)"
            defaultValue={2}
            onChange={(e) => handleChangeCountry(e)}
          >
            {countries.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <p>
            Documentos: Ingrese números sin puntos, sin guiones y sin espacios.
          </p>
          {createButtons(
            ["documento"],
            ["DNI (*)"],
            state.inputStyle,
            "documentos"
          )}
          <TextField
            id="outlined-select-nacionality"
            sx={state.inputStyle}
            name="paisEmision"
            select
            label="Emitido por (*)"
            defaultValue={2}
            onChange={(e) => handleChangeDocument(e)}
          >
            {countries.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box>
          <h3>Domicilio Particular</h3>
          {createButtons(
            ["domicilio", "altura", "piso", "depto"],
            ["Calle (*)", "Número (*)", "Piso", "Dpto"],
            state.inputStyle,
            "domicilioParticular"
          )}
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="pais"
            label="País (*)"
            defaultValue={2}
            onChange={(e) => handleChangeCountry2(e)}
          >
            {countries2.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="provincia"
            label="Provincia (*)"
            defaultValue={56}
            onChange={(e) => handleChangeCountry2(e)}
          >
            {cities2.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-career"
            sx={state.inputStyle}
            select
            name="localidad"
            label="Localidad (*)"
            defaultValue={1316}
            onChange={(e) => handleChangeCountry2(e)}
          >
            {localties2.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.nombre}
              </MenuItem>
            ))}
          </TextField>
          {createButtons(
            ["codigoPostal"],
            ["Código Postal"],
            state.inputStyle,
            "domicilioParticular"
          )}
          {createButtons(
            ["telefono", "celular", "email"],
            ["Teléfono (*)", "Celular (*)", "E-mail (*)"],
            state.inputStyle,
            "domicilioParticular"
          )}
        </Box>
        <Box>
          <h3>Datos Académicos</h3>
          <TextField
            id="outlined-select-nacionality"
            sx={state.inputStyle}
            name="studies"
            select
            label="Seleccione una opción (*)"
            onChange={(e) => handleChangeStudies(e)}
            defaultValue={"Con estudios secundarios"}
          >
            {studies.map((value, index) => (
              <MenuItem key={index} value={value.name}>
                {value.name}
              </MenuItem>
            ))}
          </TextField>
          <Autocomplete
            id="outlined-select-nacionality"
            sx={{
              float: "right",
              marginRight: "49.5vw",
              marginTop: "1vh",
              marginBottom: "2vh",
              width: "12vw",
              height: "5vh",
            }}
            name="institutoEducacion"
            options={highschools}
            getOptionLabel={(option) => option.nombre}
            onChange={(e, value) =>
              setForm({
                ...form,
                datosAcademicosSecundario: {
                  ...form.datosAcademicosSecundario,
                  institutoEducacion: { id: value.id },
                },
              })
            }
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.nombre}
                </li>
              );
            }}
            renderInput={(params) => <TextField {...params} label="Colegio" />}
          />
          <Autocomplete
            id="outlined-select-nacionality"
            sx={{
              float: "right",
              marginRight: "49.5vw",
              marginTop: "1vh",
              marginBottom: "2vh",
              width: "12vw",
              height: "5vh",
            }}
            name="titulo"
            options={titles}
            getOptionLabel={(option) => option.meaning}
            onChange={(e, value) =>
              setForm({
                ...form,
                datosAcademicosSecundario: {
                  ...form.datosAcademicosSecundario,
                  titulo: value.meaning,
                },
              })
            }
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  {option.meaning}
                </li>
              );
            }}
            renderInput={(params) => (
              <TextField {...params} label="Título obtenido o por obtener" />
            )}
          />
          {createButtons(
            ["fechaEgresoSec"],
            ["Fecha de egreso (*)"],
            state.inputStyle,
            "datosAcademicosSecundario"
          )}
          <Box>
            <TextField
              id="outlined-select-career"
              sx={state.inputStyle}
              select
              name="paisEdu"
              label="País (*)"
              defaultValue={2}
              onChange={(e) => handleChangeCountry3(e)}
            >
              {countries3.map((value, index) => (
                <MenuItem key={index} value={value.id}>
                  {value.nombre}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-career"
              sx={state.inputStyle}
              select
              name="provinciaEdu"
              label="Provincia (*)"
              defaultValue={56}
              onChange={(e) => handleChangeCountry3(e)}
            >
              {cities3.map((value, index) => (
                <MenuItem key={index} value={value.id}>
                  {value.nombre}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-career"
              sx={state.inputStyle}
              select
              name="localidadEdu"
              label="Localidad (*)"
              defaultValue={1316}
              onChange={(e) => handleChangeCountry3(e)}
            >
              {localties3.map((value, index) => (
                <MenuItem key={index} value={value.id}>
                  {value.nombre}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <TextField
            id="outlined-select-nacionality"
            sx={state.inputStyle}
            name="Mediums"
            select
            label="Medio por el cual se enteró de la existencia de la UdeMM (*)"
            defaultValue={"Alumnos/Graduados"}
            onChange={(e) => handleChangeMediums(e)}
          >
            {mediums.map((value, index) => (
              <MenuItem key={index} value={value.name}>
                {value.name}
              </MenuItem>
            ))}
          </TextField>
          <p>(*) Datos obligatorios para continuar.</p>
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, mb: 5 }}
          onClick={handleSubmit}
        >
          Enviar Solicitud
        </Button>
      </Box>
    </Box>
  );
};

export default AdminView;
