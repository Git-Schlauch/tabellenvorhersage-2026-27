# Tabellenvorhersage Saison 2026/27

Website fuer Bundesliga- und 2. Bundesliga-Predictions mit Drag-and-drop-Tabellen, Hot Takes, Zusatz-Predictions, Autorenfeld, gemeinsamer Einreichungsliste und PNG-Export.

Die App besteht aus zwei Containern:

- `tabellenvorhersage`: Nginx fuer Frontend und `/api`-Proxy
- `tabellenvorhersage-api`: kleine Node-API, speichert Einreichungen im Docker-Volume `submissions-data`

## Lokal mit Docker starten

```bash
docker compose up -d --build
```

Danach ist die Seite unter `http://localhost:8080` erreichbar.

Einen anderen Port setzt du so:

```bash
APP_PORT=3000 docker compose up -d --build
```

## Auf einem Linux-Server deployen

```bash
git clone https://github.com/DEIN-USER/DEIN-REPO.git
cd DEIN-REPO
APP_PORT=8080 docker compose up -d --build
```

Wenn du einen Reverse Proxy nutzt, leite deine Domain auf `http://127.0.0.1:8080` weiter.

Die eingereichten Predictions bleiben im Docker-Volume erhalten. Bei Dockge den Stack also normal neu erstellen/recreaten, aber das Volume nicht loeschen.
