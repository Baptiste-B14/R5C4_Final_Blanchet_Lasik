export type Search = {
    id: number;
    algorithm: number;
    grid_width: 68,
    grid_height: 13,
    start: [number,number]
    end: [number,number]
    move_type: string,
    path_length: number,
    visited_nodes: number,
    time_ns: number
  };