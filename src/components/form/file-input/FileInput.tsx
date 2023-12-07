import { Spinner } from '@/components/spinner/Spinner';
import { useAssetUpload } from '@/hooks/merchant/experience/useAssetUpload';
import { clsx } from 'clsx';
import Image from 'next/image';
import React, { DragEventHandler } from 'react';
import { Control, Controller, ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import { TbCircleCheckFilled, TbCircleXFilled, TbCloudUpload, TbFile } from 'react-icons/tb';

interface FileInputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  accept?: string;
  label: string;
  error?: string;
}

function FileInputField<T extends FieldValues>({ control, name, ...props }: FileInputFieldProps<T>) {
  return <Controller render={({ field }) => <FileInput {...field} {...props} />} name={name} control={control} />;
}

interface FileInputProps extends ControllerRenderProps {
  label: string;
  error?: string;
  accept?: string;
  className?: string;
}

const FileInput = ({ label, error, accept, className, value, name, onChange }: FileInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const upload = useAssetUpload(onChange);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const dropHandler: DragEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();

    const items = [...ev.dataTransfer.items].map((item) => item.getAsFile());
    const files = [...ev.dataTransfer.files, ...items];
    if (files[0] !== null) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    onChange();
    upload.reset();
    upload.trigger(file);
  };

  const dragOverHandler: DragEventHandler<HTMLDivElement> = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className={clsx('inputGroup', className)}>
      <label>{label}</label>
      <label htmlFor={name}>
        <div
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
          className='relative h-52 w-full border border-dashed border-slate-200 rounded-md hover:bg-slate-100 cursor-pointer flex items-center justify-center'
        >
          <div className='flex gap-2 max-h-full'>
            {value ? (
              <FilePreview fileName={String(value)} />
            ) : (
              <>
                <TbCloudUpload size={20} />
                Húzd ide a fájlt vagy kattints
              </>
            )}
          </div>
          <div
            className={clsx('absolute right-1 top-1', { 'text-green-500': upload.data, 'text-red-500': upload.error })}
          >
            {upload.isMutating && <Spinner size='sm' />}
            {upload.data && <TbCircleCheckFilled size={30} />}
            {upload.error && <TbCircleXFilled size={30} />}
          </div>
        </div>
      </label>
      <input ref={inputRef} id={name} type='file' onChange={onInputChange} className='hidden' accept={accept} />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

function FilePreview({ fileName }: { fileName: string }) {
  const isImage = fileName.match(/.(jpg|jpeg|png|gif)$/i);
  return (
    <div className='flex gap-2 max-w-full max-h-full'>
      {isImage ? (
        <Image
          src={'http://localhost:3001/cdn/uploads/' + fileName}
          layout='fixed'
          width={200}
          height={200}
          alt='preview'
          className='rounded-md object-contain object-center'
        />
      ) : (
        <TbFile size={40} />
      )}
    </div>
  );
}

export { FileInputField };
