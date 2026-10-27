import type { DataTransformer } from '../_internals/transformers';
import { sortSkills, updateJob, updateMainSection, updateMeta } from '../_internals/transformers';
import { django, djangoNinja, mqtt, opencv, postgreSql, python, rust, timescaleDb } from '../helpers/skills';

/**
 * Resume variant targeting senior backend engineering and team lead roles.
 */
const backendLeadVariant: DataTransformer[] = [
  updateMeta({
    title: 'Arshia Soori - Senior Backend Engineer & Team Lead',
    description:
      'Senior Python backend engineer and team lead with 5+ years leading engineering teams, including two CTO roles.',
  }),
  updateMainSection({
    role: 'Senior Backend Engineer & Team Lead',
    description:
      '**Senior Python backend engineer and technical leader** with 5+ years leading engineering teams, including two CTO roles. Owns systems end to end — Django and FastAPI services, PostgreSQL and TimescaleDB data stores, message queues and real-time IoT pipelines, and containerized deployments — along with the team behind them: hiring, mentoring, and setting technical direction. Looking for a role where I can lead teams and build reliable, scalable systems.',
    tags: [{ name: 'Open for new adventures' }, { name: 'Team leadership' }, { name: 'Backend architecture' }],
    action: {
      label: 'Download CV',
      url: '/cv-backend.pdf',
      downloadedFileName: 'CV-Arshia_Soori-Backend_Team_Lead.pdf',
    },
  }),
  sortSkills('I already know', [
    'Python',
    'Django',
    'Django REST Framework',
    'Django Ninja',
    'FastAPI',
    'PostgreSQL',
    'Redis',
    'Celery',
    'RabbitMQ',
    'MQTT',
    'Docker',
    'Kubernetes',
    'Linux',
    'Git',
    'Pydantic',
  ]),
  updateJob('DelBand', {
    description: `
      Iran's first smart health monitoring service, and the first to hold a Med 3.0 license. Owned and operated by Ayandeh Pardaz, backed by MCI's investment fund Harekat Aval, with Hamrahe Aval (MCI) as investor and business partner.

      - Leading the engineering team and owning technical strategy for the company's health monitoring platform.
      - Hiring, mentoring, and managing engineers across backend, AI, and infrastructure.
      - Directing product and architecture decisions, including the backend that ingests wearable sensor data and serves health insights to the app.
      - Leading the medical algorithms team that turns sensor data into health insights using ML and AI.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [python(), rust(), django(), djangoNinja(), postgreSql(), timescaleDb()],
    },
  }),
  updateJob('IndoorA', {
    description: `
      The first indoor positioning and navigation system in the Middle East, owned and operated by Ayandeh Pardaz.

      - Led the engineering team from early product to a certified knowledge-based positioning and navigation platform.
      - Owned technical strategy, architecture, and hiring for the engineering organization.
      - Architected the backend and real-time pipeline ingesting BLE, Wi-Fi, and UWB data from beacons and gateways over MQTT into PostgreSQL and TimescaleDB.
      - Delivered one platform powering three business models (asset and workforce tracking, life safety, mall and exhibition wayfinding) for MCI, Radin, Mobarakeh Steel Company, Tehran International Exhibition Center, and Iran Mall.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [python(), rust(), django(), djangoNinja(), postgreSql(), timescaleDb(), mqtt()],
    },
  }),
  updateJob('Advanced Aerospace Structures Laboratory, K. N. Toosi University of Technology', {
    description: `
      Led the development of an intelligent traffic and movement management system for entry/exit management, automated door control, guest management, and reporting.

      - Led a team of engineers, setting technical direction and reviewing implementation.
      - Coordinated with university researchers and stakeholders on project scope and delivery.
      - Delivered operator dashboards with detailed reports on top of a real-time computer vision pipeline.
    `,
    tagsList: {
      title: 'Technologies',
      tags: [python(), opencv()],
    },
  }),
];

export default backendLeadVariant;
