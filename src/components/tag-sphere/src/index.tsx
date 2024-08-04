import {
  createRef,
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import './index.css'

type tagSphereProps = {
  texts: (string | ReactNode)[];
  fontsize: any,
  radius?: number;
  maxSpeed: number;
  initialSpeed: number;
  initialDirection: 135;
  keepRollingAfterMouseOut: boolean;
  className?: string;
  style?: CSSProperties;
  useContainerInlineStyles: boolean;
  fullWidth: boolean;
  fullHeight: boolean;
};

const defaultStyles = {
  getContainer: (radius: number, fullWidth: boolean, fullHeight: boolean) =>
    ({
      position: 'relative',
      width: fullWidth ? '10%' : `${1 * radius}px`,
      maxWidth: '10%',
      minHeight: `${2 * radius}px`,
      height: fullHeight ? '100%' : `${2 * radius}px`,
      touchAction: 'none',
      
    } as CSSProperties),
};

const computeInitialPosition = (
  index: number,
  textsLength: number,
  size: number,
) => {
  const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
  const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
  return {
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2,
  };
};

const updateItemPosition = (item: any, sc: number[], depth: number) => {
  const newItem = { ...item, scale: '' };
  const rx1 = item.x;
  const ry1 = item.y * sc[1] + item.z * -sc[0];
  const rz1 = item.y * sc[0] + item.z * sc[1];

  const rx2 = rx1 * sc[3] + rz1 * sc[2];
  const ry2 = ry1;
  const rz2 = rz1 * sc[3] - rx1 * sc[2];

  const per = (2 * depth) / (2 * depth + rz2); // todo
  newItem.x = rx2;
  newItem.y = ry2;
  newItem.z = rz2;

  if (newItem.x === item.x && newItem.y === item.y && newItem.z === item.z) {
    return item;
  }

  newItem.scale = per.toFixed(3);
  let alpha: number = per * per - 0.25;
  alpha = parseFloat((alpha > 1 ? 1 : alpha).toFixed(3));

  const itemEl = newItem.ref.current;
  // @ts-ignore
  const left = (newItem.x - itemEl.offsetWidth / 2).toFixed(2);
  // @ts-ignore
  const top = (newItem.y - itemEl.offsetHeight / 2).toFixed(2);
  const transform = `translate3d(${left}px, ${top}px, 0) scale(${newItem.scale})`;

  // @ts-ignore
  itemEl.style.WebkitTransform = transform;
  // @ts-ignore
  itemEl.style.MozTransform = transform;
  // @ts-ignore
  itemEl.style.OTransform = transform;
  // @ts-ignore
  itemEl.style.transform = transform;
  // @ts-ignore
  itemEl.style.filter = `grayscale(${(alpha - 1) * -8}) blur(${
    (alpha - 1) * -5 > 1 ? Math.floor((alpha - 1) * -8) : 0
  }px)`;
  itemEl.style.zIndex = Math.floor(alpha * 1000);
  // @ts-ignore
  itemEl.style.opacity = alpha;

  return newItem;
};

const createItem = (
  text: string | ReactNode,
  index: number,
  textsLength: number,
  size: number,
  itemRef: any,
  fontsize: number,
) => {
  const transformOrigin = '50% 50%';
  const transform = 'translate3d(-50%, -50%, 0) scale(1)';
  const itemStyles = {
    willChange: 'transform, opacity, filter',
    position: 'absolute',
    top: '100%',
    left: '-10%',
    zIndex: index + 1,
    filter: 'alpha(opacity=0)',
    opacity: 0,
    fontSize: window.innerWidth > 600 ? '20px': '20px',
    fontWeight: '400',
    color: '#ffff',
    WebkitTransformOrigin: transformOrigin,
    MozTransformOrigin: transformOrigin,
    OTransformOrigin: transformOrigin,
    transformOrigin: transformOrigin,
    WebkitTransform: transform,
    MozTransform: transform,
    OTransform: transform,
    transform: transform,
  } as CSSProperties;
  // @ts-ignore
  const itemEl = (
    <span ref={itemRef} key={index} style={itemStyles}>
      {text}
    </span>
  );

  return {
    ref: itemRef,
    el: itemEl,
    ...computeInitialPosition(index, textsLength, size),
  };
};

const defaultState: tagSphereProps = {
  texts: [
    'Hono',
    <img
      width={30}
      src={'https://cdn.svgporn.com/logos/hono.svg'}
      alt={'Random image'}
    />,
    'bun',
    <img
    width={30}
    src={'https://cdn.svgporn.com/logos/bun.svg'}
    alt={'Random image'}
  />,
    'JavaScript',
    <img
      width={50}
      src={'https://cdn.svgporn.com/logos/javascript.svg'}
      alt={'Random image'}
    />,
    'zod',
    <img
    width={50}
    src={"https://cdn.svgporn.com/logos/git.svg"}
    alt={'Random image'}
  />,
    'Zustand.',
    <img
      width={50}
      src={'https://cdn.svgporn.com/logos/react.svg'}
      alt={'Random image'}
    />,
    'Drizzle',
    <img
      width={50}
      src={'https://cdn.svgporn.com/logos/graphql.svg'}
      alt={'Random image'}
    />,
    'you',

    <img
      width={100}
      src={'https://cdn.svgporn.com/logos/neon.svg'}
      alt={'Random image'}
    />,
    'it?',
    <img
      width={50}
      src={'https://cdn.svgporn.com/logos/postgresql.svg'}
      alt={'Random image'}
    />,
    'TypeScript',
    <img
    width={50}
    src={'https://cdn.svgporn.com/logos/typescript-icon.svg'}
    alt={'Random image'}
  />,
    'nextjs',
    <img
    width={50}
    src={'https://cdn.svgporn.com/logos/nextjs-icon.svg'}
    alt={'Random image'}
  />,
    'redis',
    <img
    width={50}
    src={'https://cdn.svgporn.com/logos/python.svg'}
    alt={'Random image'}
  />,
    '',
    <img
    width={100}
    src={'https://cdn.svgporn.com/logos/supabase.svg'}
    alt={'Random image'}
  />,
  <img
  width={50}
  src={'https://cdn.svgporn.com/logos/prisma.svg'}
  alt={'Random image'}
/>,
  ],
  maxSpeed: 7,
  initialSpeed: 32,
  initialDirection: 135,
  keepRollingAfterMouseOut: true,
  useContainerInlineStyles: true,
  fullWidth: false,
  fullHeight: false,
};

export default function TagSphere(props: any) {
  const {
    maxSpeed,
    initialSpeed,
    texts,
    initialDirection,
    keepRollingAfterMouseOut,
    fullHeight,
    fullWidth,
    style,
    useContainerInlineStyles,
  }: tagSphereProps = { ...defaultState, ...props };

  let radius = props.radius;

  if (!radius) {
    radius = texts.length * 12;
  }

 
  
     
  const depth = 2 * radius;
  const size = 2.65 * radius;
  const itemHooks = texts.map(() => createRef());
  const [items, setItems]: [any[], any] = useState([]);

  useEffect(() => {
    setItems(() =>
      texts.map((text, index) =>
        createItem(text, index, texts.length, size, itemHooks[index]),
      ),
    );
  }, [texts]);

  const containerRef = useRef(null);
  const [firstRender, setFirstRender] = useState(true);
  const [lessSpeed, setLessSpeed] = useState(maxSpeed);
  const [active, setActive] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: any) => {
    // @ts-ignore
    const rect = containerRef.current.getBoundingClientRect();

    setMouseX(() => (e.clientX - (rect.left + rect.width / 2)) / 5);
    setMouseY(() => (e.clientY - (rect.top + rect.height / 2)) / 5);
  };

  const checkTouchCoordinates = (e: any) => {
    // @ts-ignore
    const rect = containerRef.current.getBoundingClientRect();
    const touchX = e.targetTouches[0].clientX;
    const touchY = e.targetTouches[0].clientY;

    if (
      touchX > rect.left &&
      touchX < rect.right &&
      touchY < rect.bottom &&
      touchY > rect.top
    ) {
      return true;
    }

    return false;
  };

  const next = () => {
    setItems((items: any) => {
      if (lessSpeed == 0) return items;

      let a, b;
      if (!keepRollingAfterMouseOut && !active && !firstRender) {
        setLessSpeed(lessSpeedCurrent => {
          const lessConstant = lessSpeed * (maxSpeed / 200);

          return lessSpeedCurrent - lessConstant > 0.01
            ? lessSpeedCurrent - lessConstant
            : 0;
        });

        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * lessSpeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * lessSpeed;

        /*setMouseX(
                                                                                                              Math.abs(mouseX - mouseX0) < 1 ? mouseX0 : (mouseX + mouseX0) / 2,
                                                                                                            );
                                                                                                            setMouseY(
                                                                                                              Math.abs(mouseY - mouseY0) < 1 ? mouseY0 : (mouseY + mouseY0) / 2,
                                                                                                            );*/
      } else if (!active && !firstRender && keepRollingAfterMouseOut) {
        a =
          -(Math.min(Math.max(-mouseY, -size), size) / radius) *
          (maxSpeed * 0.5);
        b =
          (Math.min(Math.max(-mouseX, -size), size) / radius) *
          (maxSpeed * 0.5);
      } else {
        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * maxSpeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * maxSpeed;
      }

      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return items; // pause

      // calculate offset
      const l = Math.PI / 180;
      const sc = [
        Math.sin(a * l),
        Math.cos(a * l),
        Math.sin(b * l),
        Math.cos(b * l),
      ];

      return items.map((item: any) => updateItemPosition(item, sc, depth));
    });
  };

  const init = () => {
    setActive(false);
    const mouseX0 = initialSpeed * Math.sin(initialDirection * (Math.PI / 180));
    const mouseY0 =
      -initialSpeed * Math.cos(initialDirection * (Math.PI / 180));

    setMouseX(() => mouseX0);
    setMouseY(() => mouseY0);

    next();
  };

  useEffect(() => {
    init();
    setItems((items: any) => [...items]);
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(next);
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY, lessSpeed, active, items, props.radius]);

  return (
    <div
      className={props.className}
      ref={containerRef}
      onMouseOver={() => {
        setActive(() => true);
        setFirstRender(() => false);
        setLessSpeed(() => maxSpeed);
      }}
      onMouseOut={() => {
        setActive(() => false);
      }}
      onMouseMove={handleMouseMove}
      onTouchStart={() => {
        setActive(true);
        setLessSpeed(() => maxSpeed);
        setFirstRender(() => false);
      }}
      onTouchMove={e => {
        if (checkTouchCoordinates(e)) {
          handleMouseMove(e.targetTouches[0]);
        } else {
          setActive(false);
        }
      }}
      style={
        useContainerInlineStyles
          ? style || defaultStyles.getContainer(radius, fullWidth, fullHeight)
          : undefined
      }>
        <div className='tagdd'>
        {items.map(item => item.el)}
        </div>
   
    </div>
  );
}
