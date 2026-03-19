import { iconByFeatureId } from './icons'

export type FeatureId = keyof typeof iconByFeatureId

export type FeatureMeta = {
  id: FeatureId
  rota: string
  titulo: string
  persona: string
  funcao: string
  beneficio: string
  hotspot: {
    top: number
    left: number
    width: number
    height: number
  }
}

export const features: FeatureMeta[] = [
  {
    id: 'receitas',
    rota: 'receitas',
    titulo: 'Receitas com Vídeo',
    persona: 'Para iniciantes e pessoas que querem cozinhar com orientação visual.',
    funcao: 'Acessa uma biblioteca de receitas com vídeos passo a passo.',
    beneficio: 'Deixa o preparo mais simples, visual e menos intimidante.',
    hotspot: { top: 10, left: 14.8, width: 10.2, height: 11.6 },
  },
  {
    id: 'seguranca',
    rota: 'seguranca',
    titulo: 'Modo de Segurança',
    persona: 'Para famílias com crianças, pets e usuários atentos a riscos.',
    funcao: 'Monitora situações perigosas, envia alerta e pode acionar desligamento automático.',
    beneficio: 'Reduz acidentes e aumenta a segurança no ambiente da cozinha.',
    hotspot: { top: 21.7, left: 30.9, width: 10.2, height: 11.6 },
  },
  {
    id: 'autoPreparo',
    rota: 'auto-preparo',
    titulo: 'Modo de Cozimento Automático',
    persona: 'Para quem tem rotina corrida e quer praticidade no dia a dia.',
    funcao: 'Ajusta calor e tempo automaticamente conforme a receita escolhida.',
    beneficio: 'Garante mais consistência e reduz necessidade de supervisão constante.',
    hotspot: { top: 9.4, left: 47, width: 10.2, height: 11.6 },
  },
  {
    id: 'ia',
    rota: 'ia',
    titulo: 'Área de IA',
    persona: 'Para usuários que buscam assistência inteligente no planejamento de refeições.',
    funcao: 'Sugere receitas com base nos ingredientes disponíveis em casa.',
    beneficio: 'Ajuda a planejar melhor e reduz desperdício de alimentos.',
    hotspot: { top: 9.4, left: 63.1, width: 10.2, height: 11.6 },
  },
  {
    id: 'celular',
    rota: 'celular',
    titulo: 'Integração com Celular',
    persona: 'Para usuários conectados que querem acompanhar tudo remotamente.',
    funcao: 'Conecta o fogão ao aplicativo para notificações e acompanhamento.',
    beneficio: 'Permite monitoramento remoto e mais conveniência.',
    hotspot: { top: 9.4, left: 30.9, width: 10.2, height: 11.6 },
  },
  {
    id: 'acessibilidadeVoz',
    rota: 'acessibilidade-voz',
    titulo: 'Acessibilidade por Voz',
    persona: 'Para pessoas com deficiência visual ou dificuldade motora.',
    funcao: 'Oferece comandos de voz e retorno em áudio durante o uso.',
    beneficio: 'Amplia acessibilidade e melhora a autonomia na cozinha.',
    hotspot: { top: 21.7, left: 14.8, width: 10.2, height: 11.6 },
  },
  {
    id: 'diagnostico',
    rota: 'diagnostico',
    titulo: 'Modo de Diagnóstico',
    persona: 'Para todos os usuários, especialmente quem prioriza manutenção.',
    funcao: 'Verifica status do sistema, sensores e possíveis falhas.',
    beneficio: 'Facilita manutenção preventiva e preserva desempenho do produto.',
    hotspot: { top: 21.7, left: 47, width: 10.2, height: 11.6 },
  },
  {
    id: 'ligaDesliga',
    rota: 'liga-desliga',
    titulo: 'Liga/Desliga',
    persona: 'Para todos os usuarios.',
    funcao: 'Ativa ou desativa rapidamente o sistema digital do fogão.',
    beneficio: 'Fornece controle central e acesso rápido para emergência.',
    hotspot: { top: 21.7, left: 63.1, width: 10.2, height: 11.6 },
  },
]

export const featureByRoute = Object.fromEntries(features.map((feature) => [feature.rota, feature])) as Record<
  FeatureMeta['rota'],
  FeatureMeta
>
