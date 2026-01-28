import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { ArrowRight, Check, Upload, X, ArrowLeft } from 'lucide-react';

interface OnboardingData {
  userName: string;
  petName: string;
  petType: string;
  petBreed: string;
  petAge: string;
  petAgeUnit: string;
  petPhoto: string;
}

interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
}

const petTypes = [
  { value: 'cat', label: 'Кошка' },
  { value: 'dog', label: 'Собака' },
  { value: 'bird', label: 'Птица' },
  { value: 'rodent', label: 'Грызун' },
  { value: 'reptile', label: 'Рептилия' },
  { value: 'other', label: 'Другое' },
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState('');
  const [petPhoto, setPetPhoto] = useState('');

  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm<OnboardingData>({
    mode: 'onChange',
    defaultValues: {
      petAgeUnit: 'years',
    },
  });

  const userNameValue = watch('userName');

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleUserNameSubmit = (data: OnboardingData) => {
    setUserName(data.userName);
    handleNext();
  };

  const handlePetFormSubmit = (data: OnboardingData) => {
    onComplete({ ...data, petPhoto });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Progress indicator */}
        {step > 1 && step < 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <div className="flex gap-2">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i <= step - 1 ? 'bg-[#2481CC]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Шаг {step - 1} из 2
            </p>
          </motion.div>
        )}

        <AnimatePresence mode="wait" custom={1}>
          {/* Step 1: Welcome */}
          {step === 1 && (
            <motion.div
              key="step1"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#2481CC] to-[#1a66a3] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-4xl">👋</span>
                </motion.div>

                <h2 className="text-3xl mb-4">
                  Добро пожаловать в Телемед-Питомец!
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Давайте настроим ваш профиль. Это займёт всего минуту.
                </p>

                <button
                  onClick={handleNext}
                  className="w-full bg-[#2481CC] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1a66a3] transition-colors text-lg"
                >
                  Начать
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: User Name */}
          {step === 2 && (
            <motion.div
              key="step2"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <form onSubmit={handleSubmit(handleUserNameSubmit)}>
                <h2 className="text-3xl mb-2">Как вас зовут?</h2>
                <p className="text-gray-600 mb-6">
                  Это поможет нам персонализировать ваш опыт
                </p>

                <div className="mb-6">
                  <input
                    {...register('userName', {
                      required: 'Пожалуйста, введите ваше имя',
                      minLength: {
                        value: 2,
                        message: 'Имя должно содержать минимум 2 символа',
                      },
                    })}
                    type="text"
                    placeholder="Например, Анна"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors text-lg"
                  />
                  {errors.userName && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.userName.message}
                    </p>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-4 border-2 border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-lg"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="submit"
                    disabled={!userNameValue || userNameValue.length < 2}
                    className="flex-1 bg-[#2481CC] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1a66a3] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-lg"
                  >
                    Далее
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3: Pet Information */}
          {step === 3 && (
            <motion.div
              key="step3"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <form onSubmit={handleSubmit(handlePetFormSubmit)}>
                <h2 className="text-3xl mb-2">Расскажите о вашем питомце</h2>
                <p className="text-gray-600 mb-6">
                  Эта информация поможет ветеринарам лучше вас обслуживать
                </p>

                <div className="space-y-4">
                  {/* Pet Name */}
                  <div>
                    <label className="block text-sm mb-2">
                      Имя питомца <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('petName', {
                        required: 'Обязательное поле',
                      })}
                      type="text"
                      placeholder="Например, Мурзик"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors"
                    />
                    {errors.petName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.petName.message}
                      </p>
                    )}
                  </div>

                  {/* Pet Type */}
                  <div>
                    <label className="block text-sm mb-2">
                      Вид животного <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('petType', {
                        required: 'Обязательное поле',
                      })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Выберите вид</option>
                      {petTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.petType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.petType.message}
                      </p>
                    )}
                  </div>

                  {/* Pet Breed */}
                  <div>
                    <label className="block text-sm mb-2">
                      Порода (опционально)
                    </label>
                    <input
                      {...register('petBreed')}
                      type="text"
                      placeholder="Например, Британская короткошёрстная"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Pet Age */}
                  <div>
                    <label className="block text-sm mb-2">
                      Возраст <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-3">
                      <input
                        {...register('petAge', {
                          required: 'Обязательное поле',
                          min: {
                            value: 0,
                            message: 'Возраст не может быть отрицательным',
                          },
                        })}
                        type="number"
                        placeholder="0"
                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors"
                      />
                      <select
                        {...register('petAgeUnit')}
                        className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2481CC] focus:outline-none transition-colors bg-white"
                      >
                        <option value="months">месяцев</option>
                        <option value="years">лет</option>
                      </select>
                    </div>
                    {errors.petAge && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.petAge.message}
                      </p>
                    )}
                  </div>

                  {/* Pet Photo */}
                  <div>
                    <label className="block text-sm mb-2">
                      Фото питомца (опционально)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#2481CC] transition-colors">
                      {petPhoto ? (
                        <div className="relative">
                          <img
                            src={petPhoto}
                            alt="Pet"
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => setPetPhoto('')}
                            className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer">
                          <Upload className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                          <p className="text-gray-600">
                            Нажмите для загрузки фото
                          </p>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-4 border-2 border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-lg"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="flex-1 bg-[#2481CC] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1a66a3] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-lg"
                  >
                    Сохранить и продолжить
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 4: Completion */}
          {step === 4 && (
            <motion.div
              key="step4"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 bg-[#31B545] rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-3xl mb-4">Готово! 🎉</h2>

                <div className="text-left bg-gray-50 rounded-2xl p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Вы успешно настроили демо-профиль.
                  </p>

                  <div className="bg-[#FFF3CD] border-l-4 border-[#F1A302] p-4 rounded-lg">
                    <p className="text-sm mb-2">
                      ⚠️ <strong>ВАЖНО:</strong> Это демо-версия с моковыми данными.
                    </p>
                    <p className="text-sm mb-2">
                      Полный функционал будет доступен после окончания разработки.
                    </p>
                    <p className="text-sm">
                      <strong>Старт проекта: апрель 2026 года</strong>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleNext()}
                  className="w-full bg-[#2481CC] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1a66a3] transition-colors text-lg"
                >
                  Перейти в личный кабинет
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}