import type { FeatureId } from './features'

export type FeatureDetail = {
  accentFrom: string
  accentTo: string
  accentLight: string
  accentText: string
  descricao: string
  destaques: string[]
}

export const featureDetails: Record<FeatureId, FeatureDetail> = {
  receitas: {
    accentFrom: 'from-purple-500',
    accentTo: 'to-violet-500',
    accentLight: 'bg-purple-50',
    accentText: 'text-purple-600',
    descricao:
      'Acesse uma biblioteca completa de receitas com vídeos integrados diretamente na tela do fogão. Cada receita acompanha o passo a passo visual, sincronizado com o modo de cozimento automático.',
    destaques: [
      'Biblioteca com centenas de receitas curadas',
      'Vídeos passo a passo integrados na tela',
      'Sincronização automática com o modo de cozimento',
      'Filtragem por ingredientes, tempo e dificuldade',
    ],
  },
  seguranca: {
    accentFrom: 'from-yellow-400',
    accentTo: 'to-amber-500',
    accentLight: 'bg-yellow-50',
    accentText: 'text-yellow-600',
    descricao:
      'O sistema monitora continuamente o ambiente da cozinha, detectando situações de risco como superaquecimento, objetos próximos ao fogo e presença de crianças. Alerta e desligamento automático em emergências.',
    destaques: [
      'Monitoramento de superaquecimento e gás',
      'Detecção de objetos e presença de crianças',
      'Alerta sonoro e visual em tempo real',
      'Desligamento automático em situações críticas',
    ],
  },
  autoPreparo: {
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-500',
    accentLight: 'bg-emerald-50',
    accentText: 'text-emerald-600',
    descricao:
      'Selecione a receita e o fogão cuida do resto. O sistema ajusta automaticamente a intensidade do fogo e o tempo de cozimento com base no prato escolhido, garantindo resultados consistentes.',
    destaques: [
      'Ajuste automático de temperatura e tempo',
      'Perfis de cozimento para cada tipo de receita',
      'Notificação quando o prato está pronto',
      'Histórico de preparos e ajustes personalizados',
    ],
  },
  ia: {
    accentFrom: 'from-orange-500',
    accentTo: 'to-amber-500',
    accentLight: 'bg-orange-50',
    accentText: 'text-orange-600',
    descricao:
      'A inteligência artificial do CookEye analisa os ingredientes disponíveis na sua despensa e sugere receitas personalizadas, ajudando no planejamento de refeições e na redução do desperdício.',
    destaques: [
      'Sugestões baseadas nos ingredientes disponíveis',
      'Planejamento semanal de refeições',
      'Redução inteligente de desperdício',
      'Aprendizado com preferências do usuário',
    ],
  },
  celular: {
    accentFrom: 'from-pink-500',
    accentTo: 'to-fuchsia-500',
    accentLight: 'bg-pink-50',
    accentText: 'text-pink-600',
    descricao:
      'Conecte o CookEye ao seu smartphone para receber notificações em tempo real, monitorar o cozimento remotamente e controlar funções básicas do fogão de qualquer lugar da casa.',
    destaques: [
      'Notificações em tempo real no celular',
      'Monitoramento remoto do cozimento',
      'Controle de funções básicas à distância',
      'Histórico de uso e estatísticas',
    ],
  },
  acessibilidadeVoz: {
    accentFrom: 'from-sky-500',
    accentTo: 'to-blue-400',
    accentLight: 'bg-sky-50',
    accentText: 'text-sky-600',
    descricao:
      'O modo de acessibilidade por voz permite controlar todas as funções do fogão através de comandos de voz, com retorno em áudio para cada ação. Projetado para usuários com deficiência visual ou motora.',
    destaques: [
      'Comandos de voz para todas as funções',
      'Retorno em áudio claro e objetivo',
      'Compatível com leitores de tela',
      'Interface simplificada para acessibilidade',
    ],
  },
  diagnostico: {
    accentFrom: 'from-slate-300',
    accentTo: 'to-slate-500',
    accentLight: 'bg-slate-100',
    accentText: 'text-slate-600',
    descricao:
      'O modo de diagnóstico verifica a integridade de todos os componentes do fogão, identificando possíveis falhas antes que se tornem problemas. Manutenção preventiva ao alcance de um toque.',
    destaques: [
      'Verificação completa de sensores e componentes',
      'Alertas de manutenção preventiva',
      'Relatório detalhado de status do sistema',
      'Sugestões de manutenção e contato com suporte',
    ],
  },
  ligaDesliga: {
    accentFrom: 'from-red-500',
    accentTo: 'to-rose-500',
    accentLight: 'bg-red-50',
    accentText: 'text-red-600',
    descricao:
      'O botão central de controle do CookEye. Liga e desliga o sistema digital do fogão com um único toque, servindo também como acesso rápido para desligamento de emergência.',
    destaques: [
      'Ativação e desativação com um toque',
      'Botão de emergência para desligamento rápido',
      'Indicador LED de status do sistema',
      'Bloqueio de segurança configurável',
    ],
  },
}
