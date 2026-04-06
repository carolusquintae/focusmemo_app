type Mazo = {
  id_mazo: number;
  id_usuario: number;
  nombre: string;
  descripcion?: string | null;
  color?: string | null;
  fecha_creacion?: Date | null;
}

type Mazos = Array<Mazo>

type PartidaMinijuego = {
  id_partida: number;
  id_usuario: number;
  puntuacion?: number | null;
  aciertos?: number | null;
  errores?: number | null;
  fecha?: Date | null;
}

type ProgresoTarjeta = {
  id_progreso: number;
  id_usuario: number;
  id_tarjeta: number;
  repeticion?: number | null;
  intervalo?: number | null;
  ease_factor?: number | null;
  proxima_revision?: Date | null;
  ultima_revision?: Date | null;
}

type ResultadoTarjeta = {
  id_resultado: number;
  id_usuario: number;
  id_tarjeta: number;
  calidad_respuesta: number;
  fecha?: Date | null;
}

type SesionEstudio = {
  id_sesion: number;
  id_usuario: number;
  fecha_inicio?: Date | null;
  fecha_fin?: Date | null;
  tarjetas_estudiadas?: number | null;
  aciertos?: number | null;
  errores?: number | null;
}

type Suscripcion = {
  id_suscripcion: number;
  id_usuario: number;
  tipo_plan?: string | null;
  fecha_inicio?: Date | null;
  fecha_fin?: Date | null;
  estado?: string | null;
}

type Suscripciones = Array<Suscripcion>

type Tarjeta = {
  id_tarjeta: number,
  id_mazo: number,
  pregunta: string,
  respuesta: string,
  fecha_creacion?: Date
  activa?: boolean
}

type Tarjetas = Array<Tarjeta>

type Usuario = {
  id_usuario: number,
  nombre: string,
  email: string,
  password_hash: string,
  fecha_registro?: Date,
  premium?: boolean,
  fecha_fin_premium?: Date | null
}

type Usuarios = Array<Usuario>