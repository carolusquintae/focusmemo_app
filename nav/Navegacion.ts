import { Router } from "expo-router"

export function pushError(router: Router, mensaje: string, detalle?: string) {
  router.push({
    pathname: "/error",
    params: { 
      mensaje, 
      detalle
    }
  })
}

export function replaceError(router: Router, mensaje: string, detalle?: string) {
  router.replace({
    pathname: "/error",
    params: { 
      mensaje, 
      detalle
    }
  })
}