import { useState } from "react";
import Button from "../../common/components/button";
import styles from "./styles.module.css";

export const MODAL_ID = "survey-pay";

export const SURVEY_STEPS = {
  USEFUL: "useful",
  PAY: "pay",
  FEEDBACK: "feedback",
};

const Survey = ({ onClose }) => {
  const [step, setStep] = useState(SURVEY_STEPS.USEFUL);

  const handleViewPayStep = () => setStep(SURVEY_STEPS.PAY);
  const handleViewFeedbackStep = () => setStep(SURVEY_STEPS.FEEDBACK);

  const handleClose = () => {
    setStep(SURVEY_STEPS.USEFUL);
    onClose();
  };

  const renderSecondaryButton = () => (
    <Button
      className={styles.secondary_button}
      onClick={handleViewFeedbackStep}
      type="secondary"
    >
      No
    </Button>
  );

  const renderUsefulStep = () => (
    <>
      <h2>Was this useful?</h2>
      <Button onClick={handleViewPayStep}>Yes</Button>
      {renderSecondaryButton()}
    </>
  );

  const renderPayStep = () => (
    <>
      <h2>Will you pay $5/month for daily monitoring of these pages?</h2>
      <Button onClick={handleViewFeedbackStep}>Yes</Button>
      {renderSecondaryButton()}
    </>
  );

  const renderFeedbackStep = () => (
    <>
      <h2>Thank for your feedback!</h2>
      <Button onClick={handleClose}>Ok</Button>
    </>
  );

  const renderStep = () => {
    switch (step) {
      case SURVEY_STEPS.PAY:
        return renderPayStep();

      case SURVEY_STEPS.FEEDBACK:
        return renderFeedbackStep();

      // case SURVEY_STEPS.USEFUL
      default:
        return renderUsefulStep();
    }
  };

  return renderStep();
};

export default Survey;
