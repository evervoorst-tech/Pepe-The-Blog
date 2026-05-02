declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          behavior?: "scroll" | "slide" | "alternate";
          bgcolor?: string;
          direction?: "left" | "right" | "up" | "down";
          height?: string | number;
          hspace?: string | number;
          loop?: string | number;
          scrollamount?: string | number;
          scrolldelay?: string | number;
          truespeed?: boolean;
          vspace?: string | number;
          width?: string | number;
        },
        HTMLElement
      >;
    }
  }
}
