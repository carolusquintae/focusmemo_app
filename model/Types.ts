export type Mazo = {
  idMazo: number;
  idUsuario: number;
  nombre: string;
  descripcion?: string | null;
  color?: string | null;
  fechaCreacion?: Date | null;
}

export type Mazos = Array<Mazo>

export type PartidaMinijuego = {
  idPartida: number;
  idUsuario: number;
  puntuacion?: number | null;
  aciertos?: number | null;
  errores?: number | null;
  fecha?: Date | null;
}

export type ProgresoTarjeta = {
  idProgreso: number;
  idUsuario: number;
  idTarjeta: number;
  repeticion?: number | null;
  intervalo?: number | null;
  easeFactor?: number | null;
  proximaRevision?: Date | null;
  ultimaRevision?: Date | null;
}

export type ResultadoTarjeta = {
  idResultado: number;
  idUsuario: number;
  idTarjeta: number;
  calidadRespuesta: number;
  fecha?: Date | null;
}

export type SesionEstudio = {
  idSesion: number;
  idUsuario: number;
  fechaInicio?: Date | null;
  fechaFin?: Date | null;
  tarjetasEstudiadas?: number | null;
  aciertos?: number | null;
  errores?: number | null;
}

export type Suscripcion = {
  idSuscripcion: number;
  idUsuario: number;
  tipoPlan?: string | null;
  fechaInicio?: Date | null;
  fechaFin?: Date | null;
  estado?: string | null;
}

export type Suscripciones = Array<Suscripcion>

export type Tarjeta = {
  idTarjeta: number,
  idMazo: number,
  pregunta: string,
  respuesta: string,
  fechaCreacion?: Date
  activa?: boolean
}

export type Tarjetas = Array<Tarjeta>

export type Usuario = {
  idUsuario: number,
  nombre: string,
  email: string,
  passwordHash: string,
  fechaRegistro?: Date,
  premium?: boolean,
  fechaFinPremium?: Date | null
}

export type Usuarios = Array<Usuario>