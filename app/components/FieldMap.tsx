import styles from "../operational.module.css";

type MapNodeProps = {
  x: number;
  y: number;
  eyebrow: string;
  label: string;
  align?: "start" | "end";
  muted?: boolean;
};

function MapNode({
  x,
  y,
  eyebrow,
  label,
  align = "start",
  muted = false,
}: MapNodeProps) {
  const textAnchor = align === "end" ? "end" : "start";
  const textX = align === "end" ? x - 20 : x + 20;

  return (
    <g className={muted ? styles.mapNodeMuted : styles.mapNode}>
      <circle className={styles.mapNodeHalo} cx={x} cy={y} r="18" />
      <circle className={styles.mapNodeCore} cx={x} cy={y} r="5" />
      <text
        className={styles.mapNodeEyebrow}
        x={textX}
        y={y - 12}
        textAnchor={textAnchor}
      >
        {eyebrow}
      </text>
      <text
        className={styles.mapNodeLabel}
        x={textX}
        y={y + 9}
        textAnchor={textAnchor}
      >
        {label}
      </text>
    </g>
  );
}

/**
 * A deliberately legible system diagram. It is SVG rather than canvas so it
 * remains searchable, accessible, responsive, and inexpensive to animate.
 */
export default function FieldMap() {
  return (
    <figure className={styles.mapFigure}>
      <svg
        className={styles.fieldMap}
        viewBox="0 0 1440 760"
        role="img"
        aria-labelledby="field-map-title field-map-description"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="field-map-title">Apolast living system field map</title>
        <desc id="field-map-description">
          A map showing how legacy source and runtime evidence are traced into
          business rules, an evidence ledger, pull-request-ready change, and a
          CI synchronization loop.
        </desc>

        <defs>
          <pattern
            id="field-map-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              className={styles.mapGridLine}
              fill="none"
            />
          </pattern>
          <linearGradient id="field-map-wash" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#d9e6de" stopOpacity="0.7" />
            <stop offset="0.55" stopColor="#efede7" stopOpacity="0" />
            <stop offset="1" stopColor="#e8dfcf" stopOpacity="0.72" />
          </linearGradient>
          <marker
            id="field-map-arrow"
            markerWidth="9"
            markerHeight="9"
            refX="7"
            refY="4.5"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path className={styles.mapArrow} d="M1 1 L8 4.5 L1 8 Z" />
          </marker>
        </defs>

        <rect className={styles.mapGrid} width="1440" height="760" />
        <rect className={styles.mapWash} width="1440" height="760" />

        <g className={styles.mapCoordinates} aria-hidden="true">
          <text x="34" y="42">N 52° 13′ 04″</text>
          <text x="1406" y="42" textAnchor="end">REV. 01 / LIVE</text>
          <text x="34" y="730">SYSTEM OF RECORD / 2026</text>
          <text x="1406" y="730" textAnchor="end">NOT TO SCALE</text>
        </g>

        <g aria-hidden="true">
          <path
            className={`${styles.mapRoute} ${styles.mapRoutePrimary}`}
            d="M 192 389 C 285 389, 302 206, 412 206 S 579 385, 696 385 S 900 205, 1008 205 S 1160 388, 1252 388"
            fill="none"
            markerEnd="url(#field-map-arrow)"
          />
          <path
            className={`${styles.mapRoute} ${styles.mapRouteSecondary}`}
            d="M 192 389 C 360 389, 440 548, 720 550 S 1070 572, 1252 388"
            fill="none"
            markerEnd="url(#field-map-arrow)"
          />
          <path
            className={styles.mapRouteFaint}
            d="M 430 207 C 448 337, 578 385, 696 385 M 1008 205 C 964 342, 858 416, 720 550"
            fill="none"
          />
          <path
            className={styles.mapRouteDashed}
            d="M 720 550 C 770 652, 1080 654, 1140 496"
            fill="none"
            markerEnd="url(#field-map-arrow)"
          />
        </g>

        <MapNode x={180} y={390} eyebrow="01 / OBSERVE" label="Legacy estate" />
        <MapNode x={430} y={205} eyebrow="02 / TRACE" label="Runtime paths" />
        <MapNode x={710} y={386} eyebrow="03 / EXTRACT" label="Business rules" />
        <MapNode
          x={1020}
          y={205}
          eyebrow="04 / VERIFY"
          label="Evidence ledger"
        />
        <MapNode
          x={1260}
          y={390}
          eyebrow="05 / DELIVER"
          label="PR-ready change"
          align="end"
        />
        <MapNode
          x={720}
          y={552}
          eyebrow="CI / CONTINUITY"
          label="System stays current"
          muted
        />

        <g className={styles.mapLegend} aria-hidden="true">
          <line x1="1094" y1="662" x2="1144" y2="662" />
          <text x="1158" y="668">EVIDENCE ROUTE</text>
          <line className={styles.mapLegendDashed} x1="1094" y1="690" x2="1144" y2="690" />
          <text x="1158" y="696">CONTINUOUS SYNC</text>
        </g>
      </svg>
      <figcaption className={styles.mapCaption}>
        <span>Fig. 01</span>
        The map is a working record: source, execution, and institutional
        knowledge remain connected as the estate changes.
      </figcaption>
    </figure>
  );
}
