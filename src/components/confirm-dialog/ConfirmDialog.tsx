import { Button } from '@/components/button/Button';
import { Card } from '@/components/card/Card';
import { Dialog } from '@headlessui/react';
import { ReactNode, useState } from 'react';

interface ConfirmDialogProps {
  trigger: (open: () => void) => ReactNode;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export function ConfirmDialog({
  trigger,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = 'Tovább',
  cancelText = 'Mégse',
}: ConfirmDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  const handleCancel = () => {
    onCancel?.();
    setIsOpen(false);
  };

  return (
    <>
      {trigger(() => setIsOpen(true))}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className='fixed inset-0 bg-black/30 flex w-screen items-center justify-center p-4'>
          <Dialog.Panel>
            <Card className='p-4'>
              <Dialog.Title>{title}</Dialog.Title>
              <Dialog.Description className='mt-5'>{description}</Dialog.Description>
              <div className='flex gap-3 justify-end mt-5'>
                <Button
                  variant='secondary'
                  className='px-4 py-2 border-red-500 hover:bg-red-500'
                  onClick={handleCancel}
                >
                  {cancelText}
                </Button>
                <Button className='px-4 py-2 bg-red-500 shadow-none' onClick={handleConfirm}>
                  {confirmText}
                </Button>
              </div>
            </Card>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
