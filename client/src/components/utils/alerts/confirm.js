import React, { useState, useEffect } from 'react'
import { Button } from 'components/ui/forms/button'
import {
  Buttons,
  ConfirmModal,
  TitleWithIcon,
} from 'components/utils/styles/modalStyled'
import UseAnimations from 'react-useanimations'

const Confirm = ({ active, callbackConfirm, callbackCancel }) => {
  const [activeAlert, setActiveAlert] = useState(false)

  useEffect(() => {
    setActiveAlert(active)
  }, [setActiveAlert, active])

  const handleCancelClick = () => {
    setActiveAlert(false)
    callbackCancel()
  }

  const handleConfirmClick = () => {
    setActiveAlert(false)
    callbackConfirm()
  }

  return (
    activeAlert && (
      <ConfirmModal
        modalActive={activeAlert}
        handleCloseClick={handleCancelClick}
        title={
          <TitleWithIcon>
            <UseAnimations animationKey="alertOctagon" />
            <span>Delete gig</span>
          </TitleWithIcon>
        }
      >
        <p>Are you sure you want to delete this gig?</p>
        <Buttons>
          <Button onClick={() => handleConfirmClick()} inline>
            Delete
          </Button>
          <Button onClick={() => handleCancelClick()} type="secondary" inline>
            Cancel
          </Button>
        </Buttons>
      </ConfirmModal>
    )
  )
}

export default Confirm
