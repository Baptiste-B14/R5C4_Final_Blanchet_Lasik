task_dto = {
  "type": "object",
  "properties": {
    "id": {"type": "int"},
    "algorithm": {"type": "string"},
    "grid_width": {"type": "int"},
    "grid_height": {"type": "int"},
    "move_type": {"type": "string"},
    "start": {"type": "string"},
    "end": {"type": "string"},
    "path_length": {"type": "string"},
    "visited_nodes": {"type": "string"},
    "time_ns": {"type": "string"}
  },
  "required": ["nom", "description", "categorie", "statut", "priorite", "utilisateur"],
  "additionalProperties": False
}

 {
    "id": 1,
    "algorithm": "Djikstra",
    "grid_width": 10,
    "grid_height": 10,
    "move_type": "orthogonal",
    "start": [0, 0],
    "end": [9, 9],
    "path_length": 18,
    "visited_nodes": 100,
    "time_ns": 1500
  }
]