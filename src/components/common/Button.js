import { styled } from 'nativewind';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text } from '../../components/GlobalText';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'medium',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  className = '',
  textClassName = '',
  iconColor,
  ...props
}) => {

  // const tailwind = useTailwind()
  const StyledIcon = styled(Icon)

  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 border border-blue-600';
      case 'secondary':
        return 'bg-gray-600 border border-gray-600';
      case 'success':
        return 'bg-green-600 border border-green-600';
      case 'warning':
        return 'bg-yellow-600 border border-yellow-600';
      case 'error':
        return 'bg-red-600 border border-red-600';
      case 'outline':
        return 'bg-transparent border border-gray-300';
      case 'ghost':
        return 'bg-transparent border border-transparent';
      default:
        return 'bg-blue-600 border border-blue-600';
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return 'px-3 py-2';
      case 'medium':
        return 'px-4 py-3';
      case 'large':
        return 'px-6 py-4';
      default:
        return 'px-4 py-3';
    }
  };

  const getTextColor = () => {
    if (variant === 'outline' || variant === 'ghost') {
      return 'text-gray-700';
    }
    return 'text-white';
  };

  const getTextSize = () => {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'medium':
        return 'text-base';
      case 'large':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  return (
    <TouchableOpacity
      className={`
        rounded-2xl 
        ${getVariantStyle()} 
        ${getSizeStyle()}
        ${disabled || loading ? 'opacity-50' : ''}
        flex-row items-center justify-center
        ${className}
      `}
      onPress={onPress}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'outline' || variant === 'ghost' ? '#374151' : 'white'} 
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && iconColor && (
            <StyledIcon name={icon} size={20} className={`${iconColor}`} />
          )}
          {icon && iconPosition === 'left' && !iconColor && (
            <Icon name={icon} size={20} className={`mr-2`} color={variant === 'outline' || variant === 'ghost' ? '#374151' : 'white'} />
          )}
          
          <Text className={`
            font-tajawal-bold 
            ${getTextColor()} 
            ${getTextSize()}
            ${textClassName}
          `}>
            {title}
          </Text>

          {icon && iconPosition === 'right' && (
            <Icon name={icon} size={20} className={`ml-2`} color={variant === 'outline' || variant === 'ghost' ? '#374151' :
              iconColor? iconColor: 'white'} />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;