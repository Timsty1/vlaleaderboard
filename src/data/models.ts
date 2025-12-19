// ============================================
// VLA Model Registry (Strictly based on provided info)
// ============================================

import type { ModelEntry } from '../types';

export const MODELS: Record<string, ModelEntry> = {
  'openvla': {
    id: 'openvla',
    name: 'OpenVLA',
    organization: 'OpenVLA Team',
    paper: {
      title: 'OpenVLA: An Open-Source Vision-Language-Action Model',
      authors: ['Research Team'],
      year: 2024,
      arxivId: '2406.09246',
    },
    isOpenSource: true,
    dateAdded: '2024-06-01',
  },
  'pi0': {
    id: 'pi0',
    name: 'Pi0',
    organization: 'Physical Intelligence',
    paper: {
      title: 'π₀: A Vision-Language-Action Flow Model for General Robot Control',
      authors: ['Physical Intelligence Team'],
      year: 2024,
      arxivId: '2410.24164',
    },
    githubUrl: 'https://github.com/Shiduo-zh/openpi',
    isOpenSource: false,
    dateAdded: '2024-10-01',
  },
  'pi0.5': {
    id: 'pi0.5',
    name: 'Pi0.5',
    organization: 'Physical Intelligence',
    huggingfaceUrl: 'https://huggingface.co/VLABench/pi05-primitive-10task',
    githubUrl: 'https://github.com/Shiduo-zh/openpi',
    isOpenSource: false,
    dateAdded: '2024-12-01',
  },
  'molmoact': {
    id: 'molmoact',
    name: 'Molmoact',
    organization: 'AI2',
    isOpenSource: true,
    dateAdded: '2024-11-01',
  },
  'nora': {
    id: 'nora',
    name: 'NORA',
    organization: 'Research Team',
    paper: {
      title: 'NORA: Non-Rigid Object Robotic Actor',
      authors: ['Research Team'],
      year: 2025,
      arxivId: '2510.10274',
    },
    isOpenSource: true,
    dateAdded: '2025-01-01',
  },
  'x-vla': {
    id: 'x-vla',
    name: 'x-VLA',
    organization: 'Research Team',
    paper: {
      title: 'x-VLA: Cross-embodiment Vision-Language-Action Model',
      authors: ['Research Team'],
      year: 2025,
      arxivId: '2506.19850',
    },
    isOpenSource: true,
    dateAdded: '2025-01-01',
  },
  'vla-adapter-pro': {
    id: 'vla-adapter-pro',
    name: 'vla-adapter pro',
    organization: 'Research Team',
    paper: {
      title: 'VLA-Adapter: Efficient Adaptation of Vision-Language-Action Models',
      authors: ['Research Team'],
      year: 2025,
      url: 'https://arxiv.org/pdf/2509.09372',
    },
    isOpenSource: true,
    dateAdded: '2025-02-01',
  },
  'flower': {
    id: 'flower',
    name: 'Flower',
    organization: 'Research Team',
    paper: {
      title: 'Flower: Flexible Language-conditioned Robot Framework',
      authors: ['Research Team'],
      year: 2025,
      url: 'https://arxiv.org/pdf/2509.04996',
    },
    isOpenSource: true,
    dateAdded: '2025-02-01',
  },
  'univla': {
    id: 'univla',
    name: 'UniVLA',
    organization: 'Research Team',
    paper: {
      title: 'UniVLA: Universal Vision-Language-Action Model',
      authors: ['Research Team'],
      year: 2025,
      url: 'https://arxiv.org/pdf/2506.19850',
    },
    isOpenSource: true,
    dateAdded: '2025-02-01',
  },
  'octo': {
    id: 'octo',
    name: 'Octo',
    organization: 'UC Berkeley',
    paper: {
      title: 'Octo: An Open-Source Generalist Robot Policy',
      authors: ['Research Team'],
      year: 2024,
      url: 'https://arxiv.org/pdf/2510.10274',
    },
    isOpenSource: true,
    dateAdded: '2024-05-01',
  },
  'pi0fast': {
    id: 'pi0fast',
    name: 'pi0fast',
    organization: 'Physical Intelligence',
    paper: {
      title: 'pi0fast: Fast Flow-based VLA',
      authors: ['Physical Intelligence Team'],
      year: 2024,
      url: 'https://github.com/Physical-Intelligence/openpi',
    },
    isOpenSource: false,
    dateAdded: '2024-11-01',
  },
  'smolvla-0.45b': {
    id: 'smolvla-0.45b',
    name: 'smolVLA(0.45b)',
    organization: 'VLA Community',
    paper: {
      title: 'smolVLA: Scaling Down Vision-Language-Action Models',
      authors: ['Research Team'],
      year: 2025,
      url: 'https://arxiv.org/pdf/2506.01844',
    },
    isOpenSource: true,
    dateAdded: '2025-01-01',
  },
  'rdt': {
    id: 'rdt',
    name: 'RDT',
    organization: 'Research Team',
    paper: {
      title: 'RDT: Robotic Diffusion Transformer',
      authors: ['Research Team'],
      year: 2025,
      url: 'https://arxiv.org/pdf/2506.18088',
    },
    isOpenSource: true,
    dateAdded: '2025-02-01',
  },
};

export const getAllModels = () => Object.values(MODELS);
export const getModelById = (id: string) => MODELS[id];
