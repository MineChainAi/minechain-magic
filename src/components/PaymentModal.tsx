
import { motion, AnimatePresence } from 'framer-motion';
import { PaymentModalProps, PaymentStage } from './payment/types';
import { PaymentModalHeader } from './payment/PaymentModalHeader';
import { InitialStage } from './payment/InitialStage';
import { ProcessingStage } from './payment/ProcessingStage';
import { AwaitingPaymentStage } from './payment/AwaitingPaymentStage';
import { CompletedStage } from './payment/CompletedStage';
import { ErrorStage } from './payment/ErrorStage';
import { usePaymentProcess } from './payment/usePaymentProcess';

export function PaymentModal({ 
  onClose, 
  simulationMode = false, 
  paymentCurrency = 'USDC' 
}: PaymentModalProps) {
  const {
    stage,
    chargeUrl,
    error,
    blockPrice,
    usdPrice,
    initiatePayment,
    handleSimulatedPayment,
    resetPayment
  } = usePaymentProcess({ simulationMode, paymentCurrency });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#0F1724] border border-white/10 rounded-lg shadow-xl w-full max-w-md overflow-hidden"
        >
          {/* Modal header */}
          <PaymentModalHeader 
            simulationMode={simulationMode} 
            onClose={onClose} 
          />
          
          {/* Modal content - varies based on payment stage */}
          <div className="p-6">
            {stage === PaymentStage.INITIAL && (
              <InitialStage 
                simulationMode={simulationMode}
                paymentCurrency={paymentCurrency}
                usdPrice={usdPrice}
                blockPrice={blockPrice}
                onInitiatePayment={initiatePayment}
              />
            )}
            
            {stage === PaymentStage.PROCESSING && (
              <ProcessingStage />
            )}
            
            {stage === PaymentStage.AWAITING_PAYMENT && chargeUrl && (
              <AwaitingPaymentStage 
                simulationMode={simulationMode}
                paymentCurrency={paymentCurrency}
                chargeUrl={chargeUrl}
                onSimulatedPayment={handleSimulatedPayment}
              />
            )}
            
            {stage === PaymentStage.COMPLETED && (
              <CompletedStage 
                simulationMode={simulationMode} 
              />
            )}
            
            {stage === PaymentStage.ERROR && (
              <ErrorStage 
                error={error}
                simulationMode={simulationMode}
                onInitiatePayment={initiatePayment}
                onReset={resetPayment}
              />
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
