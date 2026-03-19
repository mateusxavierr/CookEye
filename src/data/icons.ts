import acessibilidadeIcon from '../../images/icons/acessibilidade.png'
import autoPreparoIcon from '../../images/icons/auto preparo.png'
import celularIcon from '../../images/icons/celular.png'
import diagnosticoIcon from '../../images/icons/diagnostico.png'
import iaIcon from '../../images/icons/ia.png'
import ligaDesligaIcon from '../../images/icons/on off.png'
import receitasIcon from '../../images/icons/receitas.png'
import segurancaIcon from '../../images/icons/seguranca.png'

export const iconByFeatureId = {
  receitas: receitasIcon,
  seguranca: segurancaIcon,
  autoPreparo: autoPreparoIcon,
  ia: iaIcon,
  celular: celularIcon,
  acessibilidadeVoz: acessibilidadeIcon,
  diagnostico: diagnosticoIcon,
  ligaDesliga: ligaDesligaIcon,
} as const
