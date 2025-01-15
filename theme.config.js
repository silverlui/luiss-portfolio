const YEAR = 2025

export default {
  darkMode: true,
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Luis Cabrera
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  )
}
