import json
from ..controller import controller
from ..service import EstadosService
from ..repository import EstadosRepository
from ..util.constants import API_ROOT_PATH

# Obtener lista de estados de facturacion
@controller.route(API_ROOT_PATH + 'estados', methods=['GET'])
def estados(estados_service: EstadosService, estados_repository: EstadosRepository):
    return json.dumps(estados_service.get_estados(estados_repository))
