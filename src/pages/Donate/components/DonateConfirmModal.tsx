import { Currency, CurrencyAmount, ETHER, JSBI, Token, TokenAmount } from '@pancakeswap-libs/sdk'
import { transparentize } from 'polished'
import { Modal, Text, Checkbox, Link } from '@geist-ui/react'
import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { AlertTriangle } from 'react-feather'
import useI18n from '../../../hooks/useI18n'
import { getCurrencyAmount } from '../../../utils'
import ButtonCTA from '../../../components/ButtonCTA'
import Loader from '../../../components/Loader'
import { AutoRow } from '../../../components/Row'
import { AutoColumn } from '../../../components/Column'
import { CollectibleEdition } from '../../../data/Collectibles'
import BuyInputPanel from '../../../components/BuyInputPanel'
import { ApprovalState, useApproveCallbackCollectibleFactory } from '../../../hooks/useApproveCallback'

const WarningContainer = styled.div`
  max-width: 420px;
  width: 100%;
  overflow: auto;
  text-align: left;
  margin-top: 20px;
`

const StyledText = styled(Text)`
  font-size: 16px;
  margin: 0px 0px;
  font-weight: 400;
`

const StyledTitle = styled(StyledText)`
  color: #4bf2cd !important;
  font-size: 22px;
  font-weight: 700;
  margin-left: 5px;
  text-transform: uppercase;
`
const StyledLoader = styled(Loader)`
  stroke: #000 !important;
  path {
    stroke: #000 !important;
  }
`
export default function DonateConfirmModal({ isOpen, collectible, onConfirm }: { isOpen: boolean; collectible?: CollectibleEdition; onConfirm: () => void }) {
  const TranslateString = useI18n()
  const minimumDonation = getCurrencyAmount(collectible?.currency, collectible?.price)
  const [amountToDonate, setAmountToDonate] = useState(minimumDonation)
  const [approval, approveCallback] = useApproveCallbackCollectibleFactory(collectible?.currency ? new TokenAmount(collectible?.currency, amountToDonate) : undefined)
  const [approving, setApproving] = useState(false)

  return (
    <Modal disableBackdropClick open={isOpen} onClose={onConfirm} wrapClassName="viralata-modal">
      <Modal.Title>
        <StyledTitle>{TranslateString(1128, 'Confirmar doa????o')}</StyledTitle>
      </Modal.Title>
      <WarningContainer>
        <AutoColumn gap="24px">
          <StyledText>
            {TranslateString(
              1130,
              'Ao doar voc?? estar?? enviando seus tokens para o Fundo de Caridade Viralata que posteriormente ser??o enviados para as respectivas institui????es de caridade.'
            )}
          </StyledText>
          {/* <StyledText>{TranslateString(1132, 'Ap??s doar, voc?? receber?? em sua carteira um token ??nico e colecion??vel como mem??ria de seu ato de bondade.')}</StyledText>
          <StyledText>{TranslateString(1134, 'Voc?? pode doar a quantidade de tokens que quiser acima do valor m??nimo.')}</StyledText>
          <StyledText>
            {TranslateString(1134, 'Valor m??nimo: ')}
            <b>
              {minimumDonation} {collectible?.currency?.symbol}
            </b>
          </StyledText>
          <BuyInputPanel
            label="Quantidade"
            value={amountToDonate}
            id={collectible?.name || '0'}
            onUserInput={(value) => setAmountToDonate(value)}
            currency={collectible?.currency}
          />
          <ButtonCTA
            className="token-dismiss-button"
            disabled={approval === ApprovalState.PENDING || approving}
            onClick={async () => {
              if (approval === ApprovalState.NOT_APPROVED) {
                setApproving(true)
                try {
                  await approveCallback()
                } catch (exception) {
                  console.error(exception)
                } finally {
                  setApproving(false)
                }
              }
              onConfirm()
            }}
          >
            {approval === ApprovalState.PENDING || approving ? (
              <AutoRow gap="6px" justify="center">
                Aprovando <StyledLoader />
              </AutoRow>
            ) : approval === ApprovalState.NOT_APPROVED ? (
              TranslateString(150, 'Aprovar e confirmar doa????o')
            ) : (
              TranslateString(150, 'Confirmar doa????o')
            )}
          </ButtonCTA> */}
        </AutoColumn>
      </WarningContainer>
    </Modal>
  )
}
