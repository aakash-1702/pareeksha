import {
  CATALOGUE_MODULES,
  CATALOGUE_ROUNDS,
  CATALOGUE_TEMPLATES,
  CATALOGUE_ROLES,
} from "@/lib/content";
import {
  AssessmentBuilder,
  CodeRound,
  AiInterview,
  QuestionBank,
  PipelineBoard,
  Notifications,
  Scorecard,
  BentoOverview,
} from "@/components/mocks/showcase-mocks";
import { CheckIcon } from "@/components/icons";
import WordReveal from "./WordReveal";
import styles from "./Catalogue.module.css";

const MODULE_MOCKS = [AssessmentBuilder, CodeRound, AiInterview, QuestionBank, PipelineBoard, Notifications];

export default function Catalogue() {
  return (
    <div className={styles.wrapper}>
      {/* Drifting ambient blobs */}
      <div className="section-ambient" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </div>

      {/* ---- Modules ---- */}
      <section className={styles.section} id="platform" aria-labelledby="modules-heading" data-observe>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.header} reveal`} data-observe>
            <div className={styles.header__left}>
              <span className={`eyebrow ${styles.eyebrow}`}>{CATALOGUE_MODULES.eyebrow}</span>
              <span className={styles.badge}>{CATALOGUE_MODULES.badge}</span>
            </div>
            <h2 id="modules-heading" className="gradient-text">
              <WordReveal text={CATALOGUE_MODULES.headline} />
            </h2>
            <p className={styles.lead}>{CATALOGUE_MODULES.lead}</p>
            <a href={CATALOGUE_MODULES.browseLink.href} className={styles.browse}>{CATALOGUE_MODULES.browseLink.label}</a>
          </div>
          <div className={styles.grid3}>
            {CATALOGUE_MODULES.items.map((item, i) => {
              const MockComponent = MODULE_MOCKS[i];
              return (
                <div key={item.title} className={`card spotlight ${styles.card} tile-reveal`} data-observe data-tilt style={{ "--i": i } as React.CSSProperties}>
                  <div className={styles.card__mock}>
                    <MockComponent />
                  </div>
                  <div className={styles.card__body}>
                    <h3 className={styles.card__title}>{item.title}</h3>
                    <p className={styles.card__desc}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Round types ---- */}
      <section className={styles.section} id="rounds" aria-labelledby="rounds-heading" data-observe>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.header} reveal`} data-observe>
            <div className={styles.header__left}>
              <span className={styles.badge}>{CATALOGUE_ROUNDS.badge}</span>
            </div>
            <h2 id="rounds-heading" className="gradient-text">
              <WordReveal text={CATALOGUE_ROUNDS.headline} />
            </h2>
            <p className={styles.lead}>{CATALOGUE_ROUNDS.lead}</p>
            <a href={CATALOGUE_ROUNDS.browseLink.href} className={styles.browse}>{CATALOGUE_ROUNDS.browseLink.label}</a>
          </div>
          <div className={styles.grid3}>
            {CATALOGUE_ROUNDS.items.map((item, i) => (
              <div key={item.title} className={`card spotlight ${styles.round_card} tile-reveal`} data-observe data-tilt style={{ "--i": i } as React.CSSProperties}>
                <div className={styles.round_icon}>
                  <span className={styles.round_icon__inner} />
                </div>
                <h3 className={styles.card__title}>{item.title}</h3>
                <span className="chip">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Templates ---- */}
      <section className={styles.section} id="templates" aria-labelledby="templates-heading" data-observe>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.header} reveal`} data-observe>
            <div className={styles.header__left}>
              <span className={styles.badge}>{CATALOGUE_TEMPLATES.badge}</span>
            </div>
            <h2 id="templates-heading" className="gradient-text">
              <WordReveal text={CATALOGUE_TEMPLATES.headline} />
            </h2>
            <p className={styles.lead}>{CATALOGUE_TEMPLATES.lead}</p>
          </div>
          <div className={styles.templates}>
            {CATALOGUE_TEMPLATES.items.map((item, i) => (
              <div key={item.title} className={`card spotlight ${styles.template_card} tile-reveal`} data-observe data-tilt style={{ "--i": i } as React.CSSProperties}>
                <div className={styles.template__info}>
                  <h3>{item.title}</h3>
                  <p className={styles.card__desc}>{item.description}</p>
                  <a href={item.previewLink} className={styles.preview_link}>Live preview →</a>
                </div>
                <div className={styles.template__mocks}>
                  <div className={styles.template__mock_tall}>
                    {i === 0 ? <AssessmentBuilder /> : <CodeRound />}
                  </div>
                  <div className={styles.template__mock_stack}>
                    {i === 0 ? (
                      <>
                        <AiInterview />
                        <Scorecard />
                      </>
                    ) : (
                      <>
                        <PipelineBoard />
                        <Notifications />
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Role pages ---- */}
      <section className={styles.section} aria-labelledby="roles-heading" data-observe>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className={`${styles.header} reveal`} data-observe>
            <div className={styles.header__left}>
              <span className={styles.badge}>{CATALOGUE_ROLES.badge}</span>
            </div>
            <h2 id="roles-heading" className="gradient-text">
              <WordReveal text={CATALOGUE_ROLES.headline} />
            </h2>
            <p className={styles.lead}>{CATALOGUE_ROLES.lead}</p>
          </div>
          <div className={styles.roles}>
            {CATALOGUE_ROLES.items.map((item, i) => (
              <div key={item.title} className={`card spotlight ${styles.role_card} tile-reveal`} data-observe data-tilt style={{ "--i": i } as React.CSSProperties}>
                <div className={styles.role__info}>
                  <h3>{item.title}</h3>
                  <p className={styles.card__desc}>{item.description}</p>
                  <div className={styles.stages}>
                    {item.stages.map((stage) => (
                      <div key={stage} className={styles.stage}>
                        <CheckIcon style={{ color: "var(--ok)", flexShrink: 0 }} />
                        <span>{stage}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.role__ctas}>
                    <a href={item.secondaryCta.href} className="btn btn-secondary">{item.secondaryCta.label}</a>
                    <a href={item.primaryCta.href} className="btn btn-primary">{item.primaryCta.label}</a>
                  </div>
                </div>
                <div className={styles.role__mock}>
                  {i === 0 ? <PipelineBoard /> : <BentoOverview />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
