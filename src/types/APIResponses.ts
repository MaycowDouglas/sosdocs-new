type Debug = {
  type: string
  message: string
}

export type Client = {
  title: string
  categories: {
    nodes: string[]
  }
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
}

export type Certificate = {
  title: string
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
}

export type Unit = {
  title: string
  state: string
  city: string
  content: string | null
  featuredImage: {
    node: {
      sourceUrl: string
    }
  }
}

export type Post = {
  title: string
  slug: string
  content: string | null
  featuredImage: null | {
    node: {
      sourceUrl: string
    }
  }
}

type ApiResponse = {
  extensions: {
    debug: Debug[]
  }
}

export type ClientsRouteResponse = ApiResponse & {
  data: {
    clients: {
      nodes: Client[]
    }
  }
}

export type UnitsRouteResponse = ApiResponse & {
  data: {
    units: {
      nodes: Unit[]
    }
  }
}

export type CertificatesRouteResponse = ApiResponse & {
  data: {
    certificates: {
      nodes: Certificate[]
    }
  }
}

export type PostsRouteResponse = ApiResponse & {
  data: {
    posts: {
      nodes: Post[]
    }
  }
}
